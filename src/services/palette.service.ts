export interface ImagePalette {
  primary: string;
  secondary: string;
}

const fallbackPalette: ImagePalette = {
  primary: "#2f6b4f",
  secondary: "#c43d35",
};

export function hexToRgba(hex: string, alpha: number) {
  const normalized = hex.replace("#", "");
  const bigint = Number.parseInt(normalized, 16);
  const red = (bigint >> 16) & 255;
  const green = (bigint >> 8) & 255;
  const blue = bigint & 255;

  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}

export async function extractImagePalette(imageSrc: string): Promise<ImagePalette> {
  if (typeof window === "undefined") {
    return fallbackPalette;
  }

  const image = await loadImage(imageSrc);
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d", { willReadFrequently: true });

  if (!context) {
    return fallbackPalette;
  }

  const sampleSize = 84;
  canvas.width = sampleSize;
  canvas.height = sampleSize;
  context.drawImage(image, 0, 0, sampleSize, sampleSize);

  const pixels = context.getImageData(0, 0, sampleSize, sampleSize).data;
  const average = { red: 0, green: 0, blue: 0, count: 0 };
  const accent = { red: 0, green: 0, blue: 0, count: 0 };

  for (let index = 0; index < pixels.length; index += 16) {
    const red = pixels[index];
    const green = pixels[index + 1];
    const blue = pixels[index + 2];
    const alpha = pixels[index + 3];

    if (alpha < 16 || isNearWhite(red, green, blue)) {
      continue;
    }

    average.red += red;
    average.green += green;
    average.blue += blue;
    average.count += 1;

    const saturation = getSaturation(red, green, blue);

    if (saturation > 0.28) {
      accent.red += red;
      accent.green += green;
      accent.blue += blue;
      accent.count += 1;
    }
  }

  if (average.count === 0) {
    return fallbackPalette;
  }

  return {
    primary: toHex(average),
    secondary: toHex(accent.count > 0 ? accent : average),
  };
}

function loadImage(src: string) {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const image = new Image();
    image.crossOrigin = "anonymous";
    image.decoding = "async";
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = src;
  });
}

function isNearWhite(red: number, green: number, blue: number) {
  return red + green + blue > 710;
}

function getSaturation(red: number, green: number, blue: number) {
  const max = Math.max(red, green, blue) / 255;
  const min = Math.min(red, green, blue) / 255;

  if (max === 0) {
    return 0;
  }

  return (max - min) / max;
}

function toHex(color: { red: number; green: number; blue: number; count: number }) {
  const red = Math.round(color.red / color.count);
  const green = Math.round(color.green / color.count);
  const blue = Math.round(color.blue / color.count);

  return `#${componentToHex(red)}${componentToHex(green)}${componentToHex(blue)}`;
}

function componentToHex(value: number) {
  return value.toString(16).padStart(2, "0");
}
