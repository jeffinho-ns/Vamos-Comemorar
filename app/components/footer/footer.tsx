import Image from "next/image";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import logoBlue from "@/app/assets/logo_blue.png";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-300 flex flex-col items-center py-16">
      <p className="text-center">
        A missão da Vamos Comemorar é facilitar o agendamento de comemoração em
        bares e restaurantes. Nossos usuários encontram os melhores locais da
        cidade e já garantem a reserva online.
      </p>
      <ul className="w-full px-8 py-4 flex flex-col">
        <h1 className="text-center text-black mb-4 text-lg">Institucional</h1>
        <li className="text-center text-gray-700">
          <Link href="">Quem somos</Link>
        </li>
        <li className="text-center text-gray-700">
          <Link href="">Como funciona</Link>
        </li>
        <li className="text-center text-gray-700">
          <Link href="">Politica de Privacidades</Link>
        </li>
        <li className="text-center text-gray-700">Termos de Uso</li>
      </ul>

      <div className="footer-icons flex flex-row justify-center">
        <FaFacebookF className="text-3xl text-blue-900" />
        <FaInstagram className="text-3xl text-blue-900" />
      </div>

      <Link href="/">
        <Image src={logoBlue} alt="Logo" width={200}/>
      </Link>
    </footer>
  );
};

export default Footer;
