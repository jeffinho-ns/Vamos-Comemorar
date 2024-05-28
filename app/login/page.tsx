"use client";

import Banner from "@/app/components/banner/banner";
import Image from "next/image";
import imgBanner from "@/app/assets/banner01.webp";
import Form from "@/app/components/form/form";
import logoWhite from "@/app/assets/logo_white.png";
import Link from "next/link";
import Input from "../components/input/input";
import Button from "../components/button/Button/button";
import { 
  MdVisibility, 
  MdVisibilityOff 
} from "react-icons/md";
import { useMemo, useState } from "react";

export default function Login() {
  const [show, setShow] = useState<boolean>(false);
  const [emailCpf, setEmailCpf] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [openModal, setOpenModal] = useState<boolean>(false)

  const validInputs = useMemo(() => {
    // memorization para validação dos campos de email / cpf e senha
  }, [])


  // Função para fazer login no sistema
  const handleLogin = () => {

  }
  

  return (
    <div className="grid grid-cols-2">
      {openModal && (
        <div>
          Aqui vai o modal de troca de senha
        </div>
      )}
      <Banner id="banner" className="banner">
        <Image src={imgBanner} alt="Logo banner" width={150} height={150} />
      </Banner>

      <div className="form-container">
        <Link href="/">
          <Image src={logoWhite} alt="Logo" className="w-100" />
        </Link>

        <div className="title">
          <h1>Login</h1>
          <p>
            Ainda não tem uma conta? <Link href="/cadastrar">Cadastrar</Link>
          </p>
        </div>
        <Form id="form-login" className="">
          <div className="grid grid-col-1">
            <Input
              placeholder="Email / CPF"
              type="text"
              id="cpf"
              className="cpf"
              onChange={setEmailCpf}
              value={emailCpf}
            />
            <Input
              placeholder="Senha"
              type="password"
              id="password"
              className="password"
              onChange={setPassword}
              value={password}
            />
            {show && (
              <MdVisibility onClick={() => setShow(true)} />
            )}
            {!show && (
              <MdVisibilityOff onClick={() => setShow(false)} />
            )}
            <small>0 / 15</small>
            <Link href="#" onClick={() => setOpenModal(true)}>ESQUECEU SUA SENHA?</Link>
          </div>

          <Button type="submit" className="btn-login" onClick={handleLogin}>
            ENTRAR
          </Button>
        </Form>
      </div>
    </div>
  );
};

