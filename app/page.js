import Image from "next/image";

import Dropdown from "@/components/Dropdown";
import HeaderJoke from "@/components/HeaderJoke";
import Input from "@/components/Input";
import Slide from "@/components/Slide";
import { CiHeart } from "react-icons/ci";
import { FaMapMarkerAlt } from "react-icons/fa";
import { PiMagnifyingGlassLight } from "react-icons/pi";

export default function Home() {
  return (
    <main className="relative font-ubuntu flex items-center min-h-screen  flex-col  bg-background_joke">
      <div
        className="hidden xl:flex w-full h-[90px] bg-white font-bold justify-center 
    items-center text-sm ubuntu font-ubuntu"
      >
        <div className=" flex justify-between items-center w-[60%] ">
          <Image
            src="/trolland_logo_3.webp"
            alt="logo"
            width={200}
            height={100}
          />
          <p className="tracking-wider text-center">JE SUIS TALENTUEUX</p>
          <p className="tracking-wider text-center">JE RECHERCHE UN JOB</p>
          <p className="tracking-wider text-center">ME CONTACTER</p>
          <div className="flex items-center bg-bg_fav_joke text-text_fav_joke py-3 px-4">
            <CiHeart />
            <p className="pl-2">FAVORIS</p>
          </div>
          <div className="flex items-center bg-button_joke text-white py-3 px-4 text-xl">
            <PiMagnifyingGlassLight />
            <p className="pl-2 text-sm text-center">DERNIERES OFFRES !</p>
          </div>
        </div>
      </div>
      <div className="relative w-full">
        <HeaderJoke />
      </div>
      <div className="flex items-center h-full w-full py-4 text-center   xxs:px-4 xl:h-[120px] sm:w-[60vw] bg-white mt-[340px] z-20 justify-around ">
        <div className="3xl:flex ">
          <div className="flex flex-col justify-between xl:flex-row xl:space-x-4 ">
            <div className="w-full bg-background_input_joke">
              <Input
                title="Quoi ?"
                placeholder="mon métier, mon secteur, ..."
                width="330"
              />
            </div>
            <div className="flex space-x-4 mt-3 xl:mt-auto ">
              <div className="relative">
                <Input title="Où ?" placeholder="entrez la ville" width="240" />
                <div className="absolute top-1/2 right-3 -translate-y-1/2">
                  <FaMapMarkerAlt />
                </div>
              </div>
              <Dropdown />
            </div>
          </div>
          <button className="bg-button_joke w-full text-white px-8 font-bold mt-3 py-3 3xl:mt-auto 3xl:py-auto">
            TROUVER VOTRE JOB DE RÊVE
          </button>
        </div>
      </div>
      <h1 className="font-bebas_neue text-[28px] sm:text-[34px] mt-8 text-secondary_joke ">
        THOMAS, DÉVELOPPEUR FRONT-END !
      </h1>
      <div className="flex flex-col mt-8 w-full items-center lg:flex-row  lg:w-[60vw]">
        <div className="w-11/12 lg:w-1/2">
          <p>
            Avec <span className="font-bold">deux années</span> d'expérience
            passionnantes dans le domaine du{" "}
            <span className="font-bold">développement web</span>, je suis un
            développeur dévoué qui a eu l'opportunité de travailler sur des
            projets variés pour des particuliers, des associations et des
            entreprises.
          </p>{" "}
          <p>
            <span className="font-bold">Curieux</span>,{" "}
            <span className="font-bold">autonome</span>,{" "}
            <span className="font-bold">créatif</span> et{" "}
            <span className="font-bold">fiable</span>, je m'adapte pour répondre
            aux besoins techniques des projets et des équipes avec lesquelles je
            travaille.
          </p>
          <p className="mt-2">
            Mon parcours m'a permis de collaborer étroitement avec mes clients
            et collaborateurs pour comprendre leurs besoins et traduire leurs
            visions en solutions numériques adaptées. Spécialisé dans le{" "}
            <span className="font-bold">développement front-end</span>, ma
            polyvalence s'étend cependant au développement back-end et à la
            création d’interfaces utilisateurs en cas de besoin.
          </p>
          <div className="mt-2">
            {" "}
            Mon engagement, ma volonté constante de progresser et de bien faire,
            ainsi que mon approche créative, font de moi{" "}
            <span className="font-bold">
              un atout prêt à relever de nouveaux défis passionnants
            </span>
            .
            <p className="mt-3 italic text-[20px]">
              Je suis le développeur qu'il vous faut !
            </p>
          </div>
        </div>
        <div className="flex  items-center w-full justify-center mt-8 lg:mt-0 lg:justify-end lg:w-1/2">
          <div className="flex flex-col items-center font-bold">
            <Image
              src="/Thomas Rolland.png"
              alt="logo"
              width={300}
              height={300}
            />
            <p className="mt-4">thomasrolland.dev@gmail.com</p>
            <p>07 72 24 87 82</p>
          </div>
        </div>
      </div>
      <h2 className="font-bebas_neue text-[34px] mt-8 text-secondary_joke ">
        MES COMPÉTENCES
      </h2>
      <div className="w-11/12 lg:w-[60vw] mt-8">
        <Slide />
      </div>
    </main>
  );
}
