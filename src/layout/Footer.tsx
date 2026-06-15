import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import type { SocialIcon, SocialLink } from "@/domain/landing";

export interface FooterProps {
  copyright: string;
  socialLinks: SocialLink[];
}

const socialIcons: Record<SocialIcon, IconDefinition> = {
  facebook: faFacebookF,
  instagram: faInstagram,
  linkedin: faLinkedinIn,
  whatsapp: faWhatsapp,
};

export function Footer({ copyright, socialLinks }: FooterProps) {
  return (
    <footer id="contacto" className="bg-[#153c2d] px-5 py-10 text-white sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-center text-sm text-white/74 sm:text-left">{copyright}</p>
        <nav aria-label="Redes sociales">
          <ul className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <li key={link.icon}>
                <a
                  className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/16 text-white transition hover:border-white/35 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                >
                  <FontAwesomeIcon icon={socialIcons[link.icon]} className="h-5 w-5" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
