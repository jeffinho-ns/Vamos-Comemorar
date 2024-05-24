import Banner from "./components/banner/banner";
import Header from "./components/header/header";
import Image from "next/image";
import banner01 from "@/app/assets/banner01.webp";
import Form from "./components/form/form";
import { 
  MdLocationPin,
  MdLocationCity,
  MdSearch
} from "react-icons/md"
import Select from "./components/select/select";
import Input from "./components/input/input";
import img01 from "@/app/assets/banner01.webp"
import img02 from "@/app/assets/logo_white.png"

export default function Home() {
  return (
    <>
      <Header />
      <div className="overlay background-gradient fixed h-full top-0 right-0 bottom-0 left-0"></div>

      <Banner id="banner" className="banner background-gradient h-full">
        <Image
          src={banner01}
          alt="Imagem do banner"
          className="Image-banner object-cover h-full"
        />
      </Banner>
      <main className="container px-8 w-full bg-white">
        <div className="container border rounded-t-lg border border-sky-300">
          <Form id="form-search" className="form-search">
            <div className="grid grid-cols-1 w-full">
              <div className="flex items-center w-full my-2">
                <MdLocationPin className="text-blue-600 text-3xl"/>
                <Select value="" id="estado" className="p-2 rounded-lg border w-full border-blue-600 state" onChange={() => {}}>
                  <option>Selecione o estado</option>
                  <option value="rio de janeiro">Rio de janeiro</option>
                  <option value="sao paulo">São Paulo</option>
                </Select>
              </div>
              <div className="flex items-center w-full mb-2">
                <MdLocationCity className="text-blue-600 text-3xl" />
                <Input type="date" value="" id="data" className="p-2 rounded-lg border w-full border-blue-600 data" />
              </div>
              <div className="flex items-center w-full mb-2 realtive">
                <MdSearch className="text-blue-600 text-3xl absolute text-gray-700 right-10" />
                <Input placeholder="Buscar por nome" type="text" value="" id="data" className="bg-gray-300 p-2 rounded-lg border w-full border-blue-600 data" />
              </div>
            </div>
          </Form>
        </div>

        {/* <div id="default-carousel" className="relative w-full" data-carousel="slide">
          <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
            <div className="duration-700 ease-in-out" data-carousel-item>
                <Image width={200} height={200} src={img01} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Image 01" />
            </div>
            <div className="duration-700 ease-in-out" data-carousel-item>
              <Image width={200} height={200} src={img02} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Image 02" />
            </div>
          </div>

          <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
              <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
              <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
              <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
              <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
              <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
          </div>

          <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                  </svg>
                  <span className="sr-only">Previous</span>
              </span>
          </button>

          <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <span className="sr-only">Next</span>
              </span>
          </button>
        </div> */}
      </main>
    </>
  );
}
