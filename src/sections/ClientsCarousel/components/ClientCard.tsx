import Image from "next/image";
import { ImageSkeleton } from "@/components/skeletons/ImageSkeleton";
import type { Client } from "@/domain/landing";
import { useImageLoadState } from "@/hooks/useImageLoadState";

export interface ClientCardProps {
  client: Client;
  isDuplicate: boolean;
}

export function ClientCard({ client, isDuplicate }: ClientCardProps) {
  const { isLoaded, markAsLoaded } = useImageLoadState();

  return (
    <article className="client-card" aria-hidden={isDuplicate}>
      <div className="relative h-14 w-52.5 max-w-full">
        {!isLoaded ? <ImageSkeleton variant="compact" className="absolute inset-0" /> : null}
        <Image
          src={client.logo}
          alt={isDuplicate ? "" : client.name}
          width={210}
          height={80}
          className={`max-h-14 w-auto object-contain transition ${isLoaded ? "opacity-100" : "opacity-0"}`}
          onLoad={markAsLoaded}
        />
      </div>
    </article>
  );
}
