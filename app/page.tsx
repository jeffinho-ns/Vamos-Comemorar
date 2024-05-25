"use client";

import Banner from "./components/banner/banner";
import Header from "./components/header/header";
import Image from "next/image";
import banner01 from "@/app/assets/banner01.webp";
import Form from "./components/form/form";
import { MdLocationPin, MdLocationCity, MdSearch } from "react-icons/md";
import Select from "./components/select/select";
import Input from "./components/input/input";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img01 from "@/app/assets/banner01.webp";
import Footer from "./components/footer/footer";

export default function Home() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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

  return (
    <>
      <Header />

      <Banner id="banner" className="banner background-gradient h-full">
        {/* <div className="overlay background-gradient fixed h-full top-0 right-0 bottom-0 left-0"></div> */}
        <Image
          src={banner01}
          alt="Imagem do banner"
          className="Image-banner object-cover h-full"
        />
      </Banner>
      <div className="flex justify-center w-screen relative bottom-1/4 bottom-1/4 md:bottom-20 px-4 ">
        <Form
          id="form-search"
          className="md:w-3/5	border border-gray-600 border-b-0 form-search bg-white px-6 py-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="flex items-center w-full my-2">
              <MdLocationPin className="text-gray-600 text-3xl" />
              <Select
                value=""
                id="estado"
                className="p-2 w-full state"
                onChange={() => {}}
              >
                <option>Selecione o estado</option>
                <option value="rio de janeiro">Rio de janeiro</option>
                <option value="sao paulo">São Paulo</option>
              </Select>
            </div>
            <div className="flex items-center w-full">
              <MdLocationCity className="text-gray-600 text-3xl" />
              <Input
                type="date"
                value=""
                id="data"
                className="p-2 w-full data"
              />
            </div>
            <div className="flex items-center w-full relative mx-2">
              <MdSearch className="text-blue-600 text-3xl absolute text-gray-700 right-0" />
              <Input
                placeholder="Buscar por nome"
                type="text"
                value=""
                id="data"
                className="bg-gray-300 p-2 rounded-lg w-full border-blue-600 data"
              />
            </div>
          </div>
        </Form>
      </div>
      <main className="container px-8 w-full bg-white">
        <Carousel responsive={responsive} className="grid">
          <div className="mr-4 ml-4">
            <Image src={img01} alt="" />
            <div>
              <h1>Imagem 01</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam
                omnis magnam illo sequi optio doloribus magni consectetur
                reiciendis temporibus voluptatibus, id aliquid pariatur in ipsam
                necessitatibus nostrum dolorem accusantium voluptatem!
              </p>
            </div>
          </div>
          <div className="mr-4 ml-4">
            <Image src={img01} alt="" />
            <div>
              <h1>Imagem 02</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam
                omnis magnam illo sequi optio doloribus magni consectetur
                reiciendis temporibus voluptatibus, id aliquid pariatur in ipsam
                necessitatibus nostrum dolorem accusantium voluptatem!
              </p>
            </div>
          </div>
          <div className="mr-4 ml-4">
            <Image src={img01} alt="" />
            <div>
              <h1>Imagem 03</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam
                omnis magnam illo sequi optio doloribus magni consectetur
                reiciendis temporibus voluptatibus, id aliquid pariatur in ipsam
                necessitatibus nostrum dolorem accusantium voluptatem!
              </p>
            </div>
          </div>
          <div className="mr-4 ml-4">
            <Image src={img01} alt="" />
            <div>
              <h1>Imagem 04</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam
                omnis magnam illo sequi optio doloribus magni consectetur
                reiciendis temporibus voluptatibus, id aliquid pariatur in ipsam
                necessitatibus nostrum dolorem accusantium voluptatem!
              </p>
            </div>
          </div>
          <div className="mr-4 ml-4">
            <Image src={img01} alt="" />
            <div>
              <h1>Imagem 04</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam
                omnis magnam illo sequi optio doloribus magni consectetur
                reiciendis temporibus voluptatibus, id aliquid pariatur in ipsam
                necessitatibus nostrum dolorem accusantium voluptatem!
              </p>
            </div>
          </div>
          <div className="mr-4 ml-4">
            <Image src={img01} alt="" />
            <div>
              <h1>Imagem 05</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam
                omnis magnam illo sequi optio doloribus magni consectetur
                reiciendis temporibus voluptatibus, id aliquid pariatur in ipsam
                necessitatibus nostrum dolorem accusantium voluptatem!
              </p>
            </div>
          </div>
          <div className="mr-4 ml-4">
            <Image src={img01} alt="" />
          </div>
          <div className="mr-4 ml-4">
            <Image src={img01} alt="" />
          </div>
        </Carousel>
      </main>
      <Footer />
    </>
  );
}
