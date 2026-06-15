"use client";

import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import type { MenuItem } from "@/domain/landing";

export interface NavbarProps {
  title: string;
  menuItems: MenuItem[];
}

export function Navbar({ title, menuItems }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const words = title.split(" ");
  const country = words.pop();
  const brand = words.join(" ");

  const menu = (
    <ul className="flex flex-col gap-2 md:flex-row md:items-center md:gap-7">
      {menuItems.map((item) => (
        <li key={item.href}>
          <a
            className="inline-flex min-h-11 items-center rounded-md px-3 text-sm font-semibold text-[#244334] transition hover:text-[#b93838] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b93838]"
            href={item.href}
            onClick={() => setIsOpen(false)}
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#173c2d]/10 bg-[#fbfaf3]/88 backdrop-blur-xl">
      <nav
        aria-label="Navegación principal"
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10"
      >
        <a
          className="rounded-md text-xl font-black tracking-normal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b93838] sm:text-2xl"
          href="#inicio"
          aria-label="AgroIndustrial Peru, volver al inicio"
        >
          <span className="text-[#153c2d]">{brand}</span>{" "}
          <span className="text-[#c43535]">{country}</span>
        </a>

        <div className="hidden md:block">{menu}</div>

        <div className="md:hidden">
          <IconButton
            aria-label="Abrir menú"
            onClick={() => setIsOpen(true)}
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
        open={isOpen}
        onClose={() => setIsOpen(false)}
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
            onClick={() => setIsOpen(false)}
            sx={{ color: "#153c2d", borderRadius: "8px" }}
          >
            <FontAwesomeIcon icon={faXmark} className="h-5 w-5" />
          </IconButton>
        </div>
        {menu}
      </Drawer>
    </header>
  );
}
