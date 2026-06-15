"use client";

import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import type { MenuItem } from "@/domain/landing";
import { useDisclosure } from "@/hooks/useDisclosure";

export interface NavbarProps {
  title: string;
  menuItems: MenuItem[];
  whatsappUrl: string;
}

export function Navbar({ title, menuItems, whatsappUrl }: NavbarProps) {
  const mobileMenu = useDisclosure();
  const words = title.split(" ");
  const country = words.pop();
  const brand = words.join(" ");

  const menu = (
    <ul className="flex flex-col gap-2 md:flex-row md:items-center md:gap-7">
      {menuItems.map((item) => (
        <li key={item.href}>
          <a
            className="inline-flex min-h-11 items-center rounded-md px-3 text-sm font-semibold text-[#244334] transition hover:text-[#b93838] focus-visible:ring-2 focus-visible:ring-[#b93838] focus-visible:ring-offset-4 focus-visible:ring-offset-[#fbfaf3]"
            href={item.href}
            onClick={mobileMenu.close}
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );

  const whatsappButton = (
    <a
      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-[#25d366] px-4 text-sm font-semibold text-white transition hover:bg-[#1fb158] focus-visible:ring-2 focus-visible:ring-[#25d366] focus-visible:ring-offset-4 focus-visible:ring-offset-[#fbfaf3]"
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
    >
      <FontAwesomeIcon icon={faWhatsapp} className="h-4 w-4" />
      WhatsApp
    </a>
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#173c2d]/10 bg-[#fbfaf3]/88 backdrop-blur-xl">
      <nav
        aria-label="Navegación principal"
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10"
      >
        <a
          className="rounded-md text-xl font-black tracking-normal focus-visible:ring-2 focus-visible:ring-[#b93838] focus-visible:ring-offset-4 focus-visible:ring-offset-[#fbfaf3] sm:text-2xl"
          href="#inicio"
          aria-label="AgroIndustrial Peru, volver al inicio"
        >
          <span className="text-[#153c2d]">{brand}</span>{" "}
          <span className="text-[#c43535]">{country}</span>
        </a>

        <div className="hidden items-center gap-4 md:flex">
          {menu}
          {whatsappButton}
        </div>

        <div className="md:hidden">
          <IconButton
            aria-label="Abrir menú"
            onClick={mobileMenu.open}
            sx={{
              color: "#153c2d",
              border: "1px solid rgba(21, 60, 45, 0.18)",
              borderRadius: "8px",
              height: 44,
              width: 44,
            }}
          >
            <FontAwesomeIcon icon={faBars} className="h-5 w-5" />
          </IconButton>
        </div>
      </nav>

      <Drawer
        anchor="right"
        open={mobileMenu.isOpen}
        onClose={mobileMenu.close}
        PaperProps={{
          sx: {
            width: 308,
            background: "#fbfaf3",
            color: "#153c2d",
            padding: "24px",
          },
        }}
      >
        <div className="mb-8 flex items-center justify-between">
          <span className="text-lg font-black">
            <span className="text-[#153c2d]">{brand}</span>{" "}
            <span className="text-[#c43535]">{country}</span>
          </span>
          <IconButton
            aria-label="Cerrar menú"
            onClick={mobileMenu.close}
            sx={{ color: "#153c2d", borderRadius: "8px" }}
          >
            <FontAwesomeIcon icon={faXmark} className="h-5 w-5" />
          </IconButton>
        </div>
        {menu}
        <div className="mt-6">{whatsappButton}</div>
      </Drawer>
    </header>
  );
}
