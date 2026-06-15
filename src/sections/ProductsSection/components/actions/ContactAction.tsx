import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export interface ContactActionProps {
  whatsappUrl: string;
}

export function ContactAction({ whatsappUrl }: ContactActionProps) {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-[#25d366] px-4 text-sm font-bold text-white transition hover:bg-[#1fb158] focus-visible:ring-2 focus-visible:ring-[#25d366] focus-visible:ring-offset-4 focus-visible:ring-offset-[#fbfaf3]"
    >
      <FontAwesomeIcon icon={faWhatsapp} className="h-4 w-4" />
      CONTACTAR
    </a>
  );
}