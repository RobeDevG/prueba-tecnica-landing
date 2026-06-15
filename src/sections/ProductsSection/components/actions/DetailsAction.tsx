import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export interface DetailsActionProps {
  detailsUrl: string;
}

export function DetailsAction({ detailsUrl }: DetailsActionProps) {
  return (
    <a
      href={detailsUrl}
      target="_blank"
      rel="noreferrer"
      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-[#153c2d]/18 bg-white/70 px-4 text-sm font-bold text-[#153c2d] transition hover:border-[#b93838]/45 hover:text-[#b93838] focus-visible:ring-2 focus-visible:ring-[#b93838] focus-visible:ring-offset-4 focus-visible:ring-offset-[#fbfaf3]"
    >
      DETALLES
      <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" />
    </a>
  );
}