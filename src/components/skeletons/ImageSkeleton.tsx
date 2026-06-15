import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";

export interface ImageSkeletonProps {
  variant?: "frame" | "compact";
  className?: string;
}

export function ImageSkeleton({ variant = "frame", className = "" }: ImageSkeletonProps) {
  if (variant === "compact") {
    return <div role="status" className={`h-full w-full animate-pulse rounded-xl bg-black/5 ${className}`.trim()}><span className="sr-only">Loading...</span></div>;
  }

  return (
    <div role="status" className={`flex h-full w-full flex-col gap-4 animate-pulse ${className}`.trim()}>
      <div className="flex flex-1 items-center justify-center rounded-2xl bg-black/5">
        <FontAwesomeIcon icon={faImage} className="h-11 w-11 text-black/20" aria-hidden />
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}