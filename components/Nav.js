import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { PiMagnifyingGlassLight } from "react-icons/pi";

export default function Nav() {
  return (
    <div
      className="flex w-full h-[90px] bg-white font-bold justify-center 
    items-center text-sm ubuntu font-ubuntu"
    >
      <div className=" flex justify-between items-center w-[60%] ">
        <Image src="/logo-adsearch.png" alt="logo" width={200} height={100} />
        <p className="tracking-wider">JE SUIS UN TALENT</p>
        <p className="tracking-wider">JE RECHERCHE UN JOB</p>
        <p className="tracking-wider">ME CONTACTER</p>
        <div className="flex items-center bg-bg_fav text-text_fav py-3 px-4">
          <CiHeart />
          <p className="pl-2">FAVORIS</p>
        </div>
        <div className="flex items-center bg-button text-white py-3 px-4 text-xl">
          <PiMagnifyingGlassLight />
          <p className="pl-2 text-sm">DERNIERES OFFRES !</p>
        </div>
      </div>
    </div>
  );
}
