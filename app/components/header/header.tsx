"use client";

import Image from "next/image";
import logoWhite from "@/app/assets/logo_white.png";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Button from "../button/Button/button";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { useState } from "react";
import { MdPerson } from "react-icons/md"
import "./styles.css";

const Header: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const router = useRouter();

  return (
    <header className="fixed w-full z-10 bg-blue-800">
      <div className="px-8 py-4 container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <Image src={logoWhite} alt="Logo" className="w-100" />
          </Link>
          <Link href="/quem-somos" className="mr-4 ml-10 text-white hidden md:block">
            Quen somos
          </Link>
          <Link href="/quem-somos" className="ml-4 text-white hidden md:block">
            Seja parceiro
          </Link>
        </div>
        <div className="hidden md:flex items-center flex-end">
          <Button
            type="submit"
            onClick={() => router.push("/login")}
            className="bg-white rounded-lg px-5 py-2 font-normal text-sm text-gray-700"
          >
            ENTRAR
          </Button>
          <FaFacebookF className="text-white mr-4 ml-4 text-3xl" />
          <FaInstagram className="text-white ml-4 text-3xl " />
        </div>

        <div className="md:hidden flex items-center justify-between py-8">
          <MdPerson className="text-white mr-4 text-3xl"/>
          <nav>
            <section className="MOBILE-MENU flex lg:hidden">
              <div
                className="HAMBURGER-ICON space-y-2"
                onClick={() => setIsNavOpen((prev) => !prev)}
              >
                <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
                <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
                <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
              </div>

              <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                {" "}
                <div
                  className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
                  onClick={() => setIsNavOpen(false)} 
                >
                  <svg
                    className="h-8 w-8 text-gray-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </div>
                <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between">
                  <li className="border-b border-gray-400 my-8 uppercase">
                    <Link href="/about">Quem somos</Link>
                  </li>
                  <li className="border-b border-gray-400 my-4 uppercase">
                    <a href="/portfolio">Seja um parceiro</a>
                  </li>
                </ul>
              </div>
            </section>

          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
