"use client";
import Image from "next/image";
import logBrand from "../assets/logo_white.png";
import {
  MdMenu,
  MdPerson,
  MdDashboard,
  MdPerson3,
  MdFactory,
  MdSpaceBar,
  MdTableBar,
  MdPlace,
  MdTimer,
  MdEditCalendar,
  MdCardGiftcard,
} from "react-icons/md";
import Link from "next/link";
import "./styles.sass";
import { useState } from "react";

export default function DashboardLayout({ children }: any) {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [pathname, setPathname] = useState<string>()

  return (
    <>
      <header className="header-admin">
        <div className="navbar-and-brand">
          <Link className="brand" href="/">
            <Image src={logBrand} alt="Logo banner" width={130} height={130} />
          </Link>

          <span className="navbar" onClick={() => setShowMenu(!showMenu)}>
            <MdMenu className="navbar-menu-icon" />
          </span>
        </div>

        <span className="header-avatar">
          {/* <Image src="" alt="Foto do administrador" width={100} height={100} /> */}
          <MdPerson className="avatar-icon" />
        </span>
      </header>
        {showMenu && (
          <aside className={showMenu ? "aside open-menu" : "aside"}>
            <nav className="aside-navbar">
              <ul>
                <li style={{ backgroundColor: "#6561c1" }}>
                  <MdDashboard />
                  <Link href="" className="dashboard-link" onClick={() => setPathname('Dashboard')}>
                    Dashboard
                  </Link>
                </li>
                <div>
                  <h2>Operacional</h2>
                  <li>
                    <MdPerson3 />
                    <Link href="">Usuários</Link>
                  </li>
                  <li>
                    <MdFactory />
                    <Link href="">Empresa</Link>
                  </li>
                  <li>
                    <MdSpaceBar />
                    <Link href="">Commodities</Link>
                  </li>
                </div>

                <div>
                  <h2>Lugares</h2>
                  <li>
                    <MdPlace />
                    <Link href="">Lugares</Link>
                  </li>
                  <li>
                    <MdTableBar />
                    <Link href="">Mesas</Link>
                  </li>
                  <li>
                    <MdCardGiftcard />
                    <Link href="">Brindes</Link>
                  </li>
                  <li>
                    <MdTimer />
                    <Link href="">Dias de funcionamento</Link>
                  </li>
                  <li>
                    <MdEditCalendar />

                    <Link href="">Reservas</Link>
                  </li>
                </div>
              </ul>
            </nav>
          </aside>
        )}
    </>
  );
}
