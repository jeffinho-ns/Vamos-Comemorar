"use client";

import { useState } from "react";
import Image from "next/image";
import { MdLocationOn, MdInfoOutline, MdEvent } from "react-icons/md";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import imgBanner from "@/app/assets/highline/capa-highline.jpeg";
import "react-multi-carousel/lib/styles.css";
import Modal from "react-modal";
import styles from "./highline.module.scss";

import newImg1 from "@/app/assets/highline/ambiente-1.jpeg";
import newImg2 from "@/app/assets/highline/ambiente-2.jpeg";
import newImg3 from "@/app/assets/highline/ambiente-3.jpeg";
import newImg4 from "@/app/assets/highline/ambiente-4.jpeg";

import bebida1 from "@/app/assets/highline/bebida-1.jpeg";
import bebida2 from "@/app/assets/highline/bebida-2.jpeg";
import bebida3 from "@/app/assets/highline/bebida-3.jpeg";
import bebida4 from "@/app/assets/highline/bebida-4.jpeg";

import gastro1 from "@/app/assets/highline/gastronomia-1.jpeg";
import gastro2 from "@/app/assets/highline/gastronomia-2.jpeg";
import gastro3 from "@/app/assets/highline/gastronomia-3.jpeg";
import gastro4 from "@/app/assets/highline/gastronomia-4.jpeg";
import logoNew from "@/app/assets/highline/highlinelogo.png";

import icon1 from "@/app/assets/icones/area.png";
import icon2 from "@/app/assets/icones/acessivel.png";
import icon3 from "@/app/assets/icones/estacionamento.png";
import icon4 from "@/app/assets/icones/18.png";
import icon5 from "@/app/assets/icones/mesa.png";

Modal.setAppElement(
  typeof window !== "undefined" && document.getElementById("__next")
); // Correção para o modal encontrar o elemento correto

const Highline = () => {
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
            <h1 className={styles.barName}>High Line Bar</h1>
            <div className={styles.barDetails}>
              <MdLocationOn className={styles.icon} />
              <span>Rua Girassol, 144 - Vila madalena</span>
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
          O High Line Bar oferece uma experiência única de interação com o
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
          src="https://www.google.com/maps/place/R.+Azevedo+Soares,+940+-+Vila+Gomes+Cardim,+São+Paulo+-+SP,+03322-001/@-23.5493477,-46.5701764,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce5e9165a1d34b:0xf924a2f7947ca89b!8m2!3d-23.5493526!4d-46.5676015!16s%2Fg%2F11c0psfs_1?entry=ttu"
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

export default Highline;
