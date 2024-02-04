import Dropdown from "@/components/Dropdown";
import Input from "@/components/Input";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function Home() {
  return (
    <main className="realtive flex items-center min-h-screen flex-col  bg-background">
      <div className="absolute top-[90px] h-[400px] w-full bg-slate-500 z-10"></div>
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
    </main>
  );
}
