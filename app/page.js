import Image from "next/image";

import Dropdown from "@/components/Dropdown";
import Header from "@/components/Header";
import Input from "@/components/Input";
import Slide from "@/components/Slide";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative font-ubuntu flex items-center min-h-screen  flex-col  bg-background">
      <div className="relative w-full">
        <Header />
      </div>
      <div className="flex items-center h-[120px] w-[60vw] bg-white mt-[340px] z-20 justify-around ">
        <div className="flex space-x-4">
          <Input
            title="Quoi ?"
            placeholder="mon métier, mon secteur, ..."
            width="330"
          />
          <div className="relative">
            <Input title="Où ?" placeholder="entrez la ville" width="240" />
            <div className="absolute top-1/2 right-3 -translate-y-1/2">
              <FaMapMarkerAlt />
            </div>
          </div>
          <Dropdown />
          <button className="bg-button text-white px-8 font-bold">
            {" "}
            TROUVER VOTRE JOB DE RÊVE
          </button>
        </div>
      </div>
      <h1 className="font-bebas_neue text-[34px] mt-8 text-secondary ">
        THOMAS, DÉVELOPPEUR FRONT-END !
      </h1>
      <div className="flex mt-8 w-[65vw]">
        <div className="w-1/2">
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
              Thomas, le développeur qu'il vous faut !
            </p>
          </div>
        </div>
        <div className="flex justify-end w-1/2">
          <Image src="/logo-adsearch.png" alt="logo" width={300} height={100} />
        </div>
      </div>
      <h2 className="font-bebas_neue text-[34px] mt-8 text-secondary ">
        MES COMPÉTENCES
      </h2>
      <div className="w-[65vw] mt-8">
        <Slide />
      </div>
    </main>
  );
}
