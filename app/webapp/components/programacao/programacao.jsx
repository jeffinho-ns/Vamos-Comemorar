import React, { useState } from "react";
import Image from "next/image";
import styles from "./programacao.module.scss";
import ReservationModal from "../reservationModal/reservationModal";
import { MdAccessTime } from "react-icons/md";

import eventImg1 from "@/app/assets/programacao/prog-1.png";
import eventImg2 from "@/app/assets/programacao/prog-2.png";
import eventImg3 from "@/app/assets/programacao/prog-3.png";
import eventImg4 from "@/app/assets/programacao/prog-4.png";
import eventImg5 from "@/app/assets/programacao/prog-5.png";

const Programacao = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className={styles.programacao}>
      <h2 className={styles.sectionTitle}>Programação da semana</h2>
      <div className={styles.events}>
        <EventCard
          img={eventImg1}
          title="Festa Encontrin"
          category="Pagode"
          date="15 Jan 2022"
          time="20h"
          openModal={openModal}
        />
        <EventCard
          img={eventImg2}
          title="Feijoada"
          category="Alimentação"
          date="15 Jan 2022"
          time="12h"
          openModal={openModal}
        />
        <EventCard
          img={eventImg3}
          title="Double GIN"
          category="Bebida"
          date="15 Jan 2022"
          time="17h"
          openModal={openModal}
        />
        <EventCard
          img={eventImg4}
          title="Double CHOPP"
          category="Pagode"
          date="15 Jan 2022"
          time="20h"
          openModal={openModal}
        />
        <EventCard
          img={eventImg5}
          title="Dj KVSH"
          category="Pagode"
          date="15 Jan 2022"
          time="20h"
          openModal={openModal}
        />
      </div>
      <ReservationModal isOpen={modalIsOpen} onRequestClose={closeModal} />
    </div>
  );
};

const EventCard = ({ img, title, category, date, time, openModal }) => (
  <div className={styles.eventCard}>
    <div className={styles.dateDotLine}>
      <button className={styles.selectButton} onClick={openModal}></button>
      <div className={styles.dotLine}></div>
      <p className={styles.eventDate}>{date}</p>
    </div>
    <div className={styles.eventContent}>
      <Image src={img} alt={title} className={styles.eventImage} />
      <div className={styles.eventDetails}>
        <h3 className={styles.eventTitle}>{title}</h3>
        <p className={styles.eventCategory}>{category}</p>
        <div className={styles.eventTimeContainer}>
          <MdAccessTime className={styles.icon} />
          <p className={styles.eventTime}>{time}</p>
        </div>
      </div>
    </div>
  </div>
);

export default Programacao;
