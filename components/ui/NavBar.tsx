"use client";

import Link from "next/link";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function NavBar({ onHamClick }: { onHamClick: () => void }) {
  const { setTheme } = useTheme();

  return (
    <nav className="w-full flex justify-between items-center">
      <div className="left">
        <h1 className="text-2xl">
          <Link href={"/"}>DenisWritesCode</Link>
        </h1>
      </div>
      <div className="middle hidden sm:block">
        <Link href={"#services"}>Services</Link>
        <Link href={"#toolsNskills"}>Tools/SkillSet</Link>
        <Link href={"#projects"}>Projects</Link>
        <Link href={"#experience"}>Experience</Link>
        <Link href={"#blog"}>Blog</Link>
        <Link href={"/contact"}>Contact</Link>
      </div>
      <div className="right">
        <li className="flex cursor-pointer">
          <ul className="py-1 px-3">
            <Link href="https://twitter.com/DenisWritesCode/">
              <i className="cursor-pointer fab fa-twitter fa-lg"></i>
            </Link>
          </ul>
          <ul className="py-1 px-3">
            <Link href="https://www.linkedin.com/in/denis-mutinda-241500191/">
              <i className="cursor-pointer fab fa-linkedin fa-lg"></i>
            </Link>
          </ul>
          <ul className="py-1 px-3">
            <Link href="mailto:deniswritescode@gmail.com?subject=Mail from Portfolio">
              <i className="cursor-pointer fas fa-envelope-open-text fa-lg"></i>
            </Link>
          </ul>
        </li>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="menu sm:hidden" onClick={onHamClick}>
        <a href="#home">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
