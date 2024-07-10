"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import "react-multi-carousel/lib/styles.css";
import "../webapp/global.scss";
import { MdSearch } from "react-icons/md";
import { FaHeart } from "react-icons/fa";

import Header from "./components/header/header";
import Form from "./components/form/form";
import Carousel from "react-multi-carousel";
import Footer from "./components/footer/footer";

import img01 from "@/app/webapp/assetsMobile/justino.png";
import img02 from "@/app/webapp/assetsMobile/ohfregues.png";
import img03 from "@/app/webapp/assetsMobile/pracinha.png";

export default function Home() {
  const [showSecondCarousel, setShowSecondCarousel] = useState(false);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const Card = ({
    image,
    title,
    address,
    link
  }) => (
    <Link href={link}>
      <motion.div
        className="relative bg-white rounded-lg shadow-md overflow-hidden mx-4 mt-4 card-container"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative w-full h-[550px]">
          <Image
            src={image}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-4 text-shadow">
            <h2 className="text-white text-xl font-bold mb-1">{title}</h2>
            <p className="text-white">{address}</p>
          </div>
          <div className="absolute bottom-4 right-4 bg-white rounded-full p-2">
            <FaHeart className="text-red-500 text-2xl" />
          </div>
        </div>
        <div className="card-button">Reservar</div>
      </motion.div>
    </Link>
  );

  return (
    <>
      <Header />
      <p className="title">Qual evento você procura? </p>
      <div className="flex justify-center w-full px-4 py-4">
        <Form
          id="form-search"
          className="w-full border-b-0 form-search bg-white px-4 py-2"
        >
          <div className="grid grid-cols-1 gap-4">
            <div className="flex items-center w-full relative">
              <MdSearch className="text-blue-600 text-2xl absolute right-2" />
              <input
                placeholder="Buscar por nome"
                type="text"
                value=""
                id="data"
                className="bg-gray-300 p-2 rounded-lg w-full border-blue-600"
              />
            </div>
          </div>
        </Form>
      </div>
      <main className="container mx-auto px-4 bg-white pb-8">
        <Carousel responsive={responsive} className="grid">
          <Card
            image={img01}
            title="Seu Justino"
            address="Vila Madalena - SP"
            link="/justino"
          />
          <Card
            image={img02}
            title="Oh Fregues"
            address="Largo da Matriz de Nossa Senhora do Ó, 145"
            link="/ohfregues"
          />
          <Card
            image={img03}
            title="Pracinha"
            address="Vila Madalena - SP"
            link="/pracinha"
          />
        </Carousel>
      </main>
      <Footer />
    </>
  );
}
