import Image from "next/image";
import type { Client } from "@/domain/landing";

export interface ClientCardProps {
  client: Client;
  isDuplicate: boolean;
}

export function ClientCard({ client, isDuplicate }: ClientCardProps) {
  return (
    <article className="client-card" aria-hidden={isDuplicate}>
      <Image
        src={client.logo}
        alt={isDuplicate ? "" : client.name}
        width={210}
        height={80}
        className="max-h-14 w-auto object-contain"
      />
    </article>
  );
}