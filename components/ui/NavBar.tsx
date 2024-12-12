"use client";

import Link from "next/link";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { SocialIcons } from "@/components/ui/SocialIcons";
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
      <div className="left flex-none">
        <h1 className="text-xl font-bold hover:uppercase">
          <Link href={"/"}>DenisWritesCode</Link>
        </h1>
      </div>
      <div className="middle hidden md:flex-1 md:flex md:space-x-2 md:px-4 md:justify-around sm:block">
        <Link className="hover:uppercase underline" href={"/#services"}>
          Services
        </Link>
        <Link className="hover:uppercase underline" href={"/#toolsNSkills"}>
          Tools/SkillSet
        </Link>
        <Link className="hover:uppercase underline" href={"/#projects"}>
          Projects
        </Link>
        {/*<Link className="hover:uppercase underline" href={"/#experience"}>Experience</Link>
        <Link className="hover:uppercase underline" href={"/#blog"}>Blog</Link> */}
        <Link className="hover:uppercase underline" href={"/contact"}>
          Contact
        </Link>
      </div>
      <div className="right flex items-center space-x-2 md:flex-none">
        <div className="hidden md:block">
          <SocialIcons />
        </div>
        <div className="menu block sm:hidden" onClick={onHamClick}>
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
    </nav>
  );
}

export default NavBar;
