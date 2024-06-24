"use client";

import { useState } from "react";
import Image from "next/image";
import { MdLocationOn, MdInfoOutline, MdEvent } from "react-icons/md";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import imgBanner from "@/app/assets/oh-fregues.jpg";
import "react-multi-carousel/lib/styles.css";
import Modal from "react-modal";
import styles from "./ohfregues.module.scss";

import newImg1 from "@/app/assets/ohfregues/ambiente-1.jpg";
import newImg2 from "@/app/assets/ohfregues/ambiente-2.jpg";
import newImg3 from "@/app/assets/ohfregues/ambiente-3.jpg";
import newImg4 from "@/app/assets/ohfregues/ambiente-4.jpg";

import bebida1 from "@/app/assets/ohfregues/bebidas-1.jpg";
import bebida2 from "@/app/assets/ohfregues/bebidas-2.jpg";
import bebida3 from "@/app/assets/ohfregues/bebidas-3.jpg";
import bebida4 from "@/app/assets/ohfregues/bebidas-4.jpg";

import gastro1 from "@/app/assets/ohfregues/gastronomia-1.jpg";
import gastro2 from "@/app/assets/ohfregues/gastronomia-2.jpg";
import gastro3 from "@/app/assets/ohfregues/gastronomia-3.jpg";
import gastro4 from "@/app/assets/ohfregues/gastronomia-4.jpg";
import logoNew from "@/app/assets/ohfregues/logoOhfregues.png";

import icon1 from "@/app/assets/icones/area.png";
import icon2 from "@/app/assets/icones/acessivel.png";
import icon3 from "@/app/assets/icones/estacionamento.png";
import icon4 from "@/app/assets/icones/18.png";
import icon5 from "@/app/assets/icones/mesa.png";

Modal.setAppElement(
  typeof window !== "undefined" && document.getElementById("__next")
); // Correção para o modal encontrar o elemento correto

const Ohfregues = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalContent, setModalContent] = useState(null);

  const openModal = (img) => {
    setSelectedImage(img);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
    setModalContent(null);
  };

  const openModalSobre = () => {
    setModalContent("sobre");
    setModalIsOpen(true);
  };

  const openModalEventos = () => {
    setModalContent("eventos");
    setModalIsOpen(true);
  };

  return (
    <>
      <Header />

      <div className={styles.bannerContainer}>
        <Image
          src={imgBanner}
          alt="Banner"
          layout="fill"
          className={styles.bannerImage}
        />
        <div className={styles.flexButtonContainer}>
          <div className={styles.flexButtonContainerBar}>
            <button className={styles.button} onClick={openModalSobre}>
              <MdInfoOutline className={styles.icon} />
              <span>Sobre</span>
            </button>
            <button className={styles.button} onClick={openModalEventos}>
              <MdEvent className={styles.icon} />
              <span>Eventos</span>
            </button>
          </div>
        </div>
      </div>

      <div className={styles.barInfo}>
        <div className={styles.infoContainer}>
          <div className={styles.leftColumn}>
            <h1 className={styles.barName}>Oh Freguês</h1>
            <div className={styles.barDetails}>
              <MdLocationOn className={styles.icon} />
              <span>Largo da Matriz de Nossa Senhora do Ó, 145</span>
            </div>
          </div>
          <div className={styles.middleColumn}>
            <div className={styles.logoContainer}>
              <Image src={logoNew} alt="Logo" width={200} height={200} />
            </div>
          </div>
          <div className={styles.rightColumn}>
            <div className={styles.iconContainer}>
              <div className={styles.iconItem}>
                <Image src={icon1} width={40} height={40} />
                <p className={styles.iconTitle}>Área aberta</p>
              </div>
              <div className={styles.iconItem}>
                <Image src={icon2} width={40} height={40} />
                <p className={styles.iconTitle}>Acessível</p>
              </div>
              <div className={styles.iconItem}>
                <Image src={icon3} width={40} height={40} />
                <p className={styles.iconTitle}>Estacionamento</p>
              </div>
              <div className={styles.iconItem}>
                <Image src={icon4} width={40} height={40} />
                <p className={styles.iconTitle}>+18</p>
              </div>
              <div className={styles.iconItem}>
                <Image src={icon5} width={40} height={40} />
                <p className={styles.iconTitle}>Mesas</p>
              </div>
            </div>
          </div>
        </div>
        <p className={styles.barDescription}>
          O bar Oh Freguês oferece uma experiência única de interação com o
          público, é um ponto de encontro moderno entre os jovens e adultos, um
          lugar perfeito para happy hour, aniversários ou eventos corporativos.
          A decoração e estilo segue o modelo dos mais diversos hostels
          espalhados pelo mundo. São quatro ambientes: calçada, onde passa a
          sensação de estar em uma cidade de interior; piso térreo, que conta
          com uma decoração moderna; rooftop, área externa com uma linda vista
          que, aos fins de semana, conta com uma roda de samba para agitar as
          tardes; além da balada, para finalizar a noite com um ótimo clima de
          paquera.
        </p>
      </div>

      <div className={styles.sections}>
        <Section
          title="Ambientes"
          images={[newImg1, newImg2, newImg3, newImg4]}
          openModal={openModal}
        />
        <Section
          title="Gastronomia"
          images={[gastro1, gastro2, gastro3, gastro4]}
          openModal={openModal}
        />
        <Section
          title="Bebidas"
          images={[bebida1, bebida2, bebida3, bebida4]}
          openModal={openModal}
        />
      </div>

      <div className={styles.mapContainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.8531229789736!2d-46.70965078450384!3d-23.504566264570394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef8c55b0f2e7b%3A0x6b9156a1e51233b3!2sLargo%20da%20Matriz%20de%20Nossa%20Senhora%20do%20%C3%93%2C%20145%20-%20Freguesia%20do%20%C3%93%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2002925-040!5e0!3m2!1sen!2sbr!4v1625157527756!5m2!1sen!2sbr"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      <Footer />

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Modal"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.75)",
          },
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            padding: "2rem",
            borderRadius: "1rem",
          },
        }}
      >
        {selectedImage && (
          <div className={styles.modalImageContainer}>
            <img
              src={selectedImage.src}
              alt="Modal Image"
              className={styles.modalImage}
            />
          </div>
        )}
        {modalContent === "sobre" && <div>Conteúdo sobre o bar...</div>}
        {modalContent === "eventos" && <div>Conteúdo sobre eventos...</div>}
      </Modal>
    </>
  );
};

const Section = ({ title, images, openModal }) => (
  <div className={styles.section}>
    <h2 className={styles.sectionTitle}>{title}</h2>
    <div className={styles.images}>
      {images.map((img, index) => (
        <div
          key={index}
          className={styles.imageContainer}
          onClick={() => openModal(img)}
        >
          <Image src={img} alt={title} className={styles.image} />
        </div>
      ))}
    </div>
  </div>
);

export default Ohfregues;