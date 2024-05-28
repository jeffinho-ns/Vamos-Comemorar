import Image from "next/image";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import logoBlue from "@/app/assets/logo_blue.png";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-300 py-20">
      <div className="px-8 py-4 container flex flex-col md:flex-row mx-auto flex justify-between items-center">
        <p className="text-center md:w-3/6">
          A missão da Vamos Comemorar é facilitar o agendamento de comemoração
          em bares e restaurantes. Nossos usuários encontram os melhores locais
          da cidade e já garantem a reserva online.
        </p>
        <ul className="w-full px-8 py-4 flex flex-col md:w-3/12">
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

        <div className="md:w-3/12">
          <Link href="/">
            <Image src={logoBlue} alt="Logo" width={200} />
          </Link>
        </div>

        <div className="footer-icons flex flex-row justify-center">
          <FaFacebookF className="text-3xl text-blue-900" />
          <FaInstagram className="text-3xl text-blue-900" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
