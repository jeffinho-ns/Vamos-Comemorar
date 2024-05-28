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
import Select from "../components/select/select";

export default function register() {
  const [show, setShow] = useState<boolean>(false);
  const [cpf, setCpf] = useState<string>("");
  const [fullName, setFullName] = useState<string>("")
  const [year, setYear] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [confirmEmail, setConfirmEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [openModal, setOpenModal] = useState<boolean>(false)

  const validInputs = useMemo(() => {
    // memorization para validação dos campos de email / cpf e senha
  }, [])


  // Função para fazer login no sistema
  const handleRegister = () => {

  }


  return (
    <div className="">
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
          <h1>Cadastrar</h1>
          <p>
            Já possui uma conta? <Link href="/login">Criar conta</Link>
          </p>
        </div>
        <Form id="form-login" className="">
          <div className="grid grid-col-1">
            <Input
              placeholder="Cpf"
              type="text"
              id="cpf"
              className="cpf"
              onChange={setCpf}
              value={cpf}
            />
            <Input
              placeholder="Nome e sobrenome"
              type="text"
              id="full-name"
              className="full-name"
              onChange={setFullName}
              value={fullName}
            />
             <Select
                value={year}
                id="year"
                className="year"
                onChange={setYear}
              >
                <option>Selecione o ano</option>
              </Select>
              <Input
                placeholder="E-mail"
                type="text"
                id="email"
                className="email"
                onChange={setEmail}
                value={email}
              />
              <Input
                placeholder="Confirme seu e-mail"
                type="text"
                id="confirm-email"
                className="confirm-email"
                onChange={setConfirmEmail}
                value={confirmEmail}
              />
              <Input
                placeholder="Senha"
                type="text"
                id="senha"
                className="senha"
                onChange={setConfirmEmail}
                value={confirmEmail}
              />
              <div>
                <Input
                  placeholder="Confirme seu senha"
                  type="password"
                  id="password"
                  className="password"
                  onChange={setConfirmPassword}
                  value={password}
                />
                <small>0 / 15</small>
                <Input
                  placeholder="Confirme seu senha"
                  type="password"
                  id="confirm-password"
                  className="confirm-password"
                  onChange={setConfirmPassword}
                  value={confirmPassword}
                />
                <small>0 / 15</small>

                {show && (
                  <MdVisibility onClick={() => setShow(true)}/> 
                )}
                {!show && (
                  <MdVisibilityOff onClick={() => setShow(false)}/> 
                )}
              </div>

              <Link href="https://d1vz4qvol0e6u8.cloudfront.net/docs/TERMOS_DE_USO.pdf" target="_blank">TERMOS DE USO</Link>

              <Input 
                id="use-terms"
                className="use-terms"
                type="checkbox"
                value=""
                onChange={() => {}}
              />
              
            <Link href="#" onClick={() => setOpenModal(true)}>ESQUECEU SUA SENHA?</Link>
          </div>

          <Button type="submit" className="btn-login" onClick={handleRegister}>
            CADASTRAR
          </Button>
        </Form>
      </div>
    </div>
  );
};

