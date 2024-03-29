"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Slide() {
  const [width, setWidth] = useState(0);
  const slider_wrapper = useRef();

  useEffect(() => {
    setWidth(
      slider_wrapper.current.scrollWidth - slider_wrapper.current.offsetWidth
    );
  });

  return (
    <div className="w-full h-full  ">
      <motion.div
        className="overflow-hidden flex"
        ref={slider_wrapper}
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          className="inline-flex justify-between items-center space-x-4"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
        >
          <div className="relative min-w-[280px] h-[520px] bg-white border">
            <div>
              <Image
                src="/curieux.webp"
                alt="logo"
                width={280}
                height={280}
                objectFit="cover"
                objectPosition="50% 25%"
              />
              <div className="pt-3 px-3 ">
                <h5 className="font-bebas_neue text-[24px] ">CURIEUX</h5>
                <h6 className="font-bold text-[22px] ">
                  En progression constante
                </h6>
              </div>

              <p className="px-3">
                {" "}
                J&apos;apprends constamment, cherchant à exceller pour offrir le
                meilleur à mes collaborateurs et clients.
              </p>
            </div>
          </div>

          <div className="relative min-w-[280px]  h-[520px] bg-white border">
            <div>
              <Image
                src="/creatif.webp"
                alt="logo"
                width={280}
                height={280}
                objectFit="cover"
                objectPosition="50% 25%"
              />
              <div className="pt-3 px-3 ">
                <h5 className="font-bebas_neue text-[24px]">CRÉATIF</h5>
                <h6 className="font-bold text-[22px]">
                  Jamais à court de propositions
                </h6>
              </div>
              <p className="px-3">
                {" "}
                L&apos;innovation me pousse à repousser les limites, apportant
                des idées fraîches à chaque projet.
              </p>
            </div>
          </div>

          <div className="relative min-w-[280px]  h-[520px] bg-white border">
            <div>
              <Image
                src="/collaboratif.webp"
                alt="logo"
                width={280}
                height={280}
                objectFit="cover"
                objectPosition="50% 25%"
              />
              <div className="pt-3 px-3 ">
                <h5 className="font-bebas_neue text-[24px]">COLLABORATIF</h5>
                <h6 className="font-bold text-[22px]">
                  Possède un vrai esprit d&apos;équipe
                </h6>
              </div>
              <p className="px-3">
                {" "}
                À l&apos;écoute, je collabore activement et travaille avec
                l&apos;équipe pour répondre aux besoins du projet.
              </p>
            </div>
          </div>

          <div className="relative min-w-[280px]  h-[520px] bg-white border">
            <div>
              <Image
                src="/fiable.webp"
                alt="logo"
                width={280}
                height={280}
                objectFit="cover"
                objectPosition="50% 25%"
              />
              <div className="pt-3 px-3 ">
                <h5 className="font-bebas_neue text-[24px]">FIABLE</h5>
                <h6 className="font-bold text-[22px]">
                  Quelqu&apos;un sur qui on peut compter
                </h6>
              </div>
              <p className="px-3">
                {" "}
                Confiez-moi vos tâches en toute confiance. Autonome et rigoureux
                en toutes circonstances.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

{
  /* <Swiper
pagination={true}
modules={[Pagination]}
spaceBetween={"10vw"}
breakpoints={{
  320: {
    slidesPerView: 1,
    spaceBetween: 15,
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 15,
  },
}}
>
<SwiperSlide className="flex flex-col max-w-[15vw]">
  <div className=" h-[155px] bg-red-600"></div>
  <div>Curieux</div>
  <div>En progression constante</div>
  <div>
    J'apprends constamment, cherchant à exceller pour offrir le meilleur
    à mes collaborateurs et clients.
  </div>
</SwiperSlide>
<SwiperSlide className="flex flex-col max-w-[15vw]">
  <div className="min-w-[280px] h-[155px] bg-green-200"></div>
  <div>Créatif</div>
  <div>Jamais à court de propositons</div>
  <div>
    J'apprends constamment, cherchant à exceller pour offrir le meilleur
    à mes collaborateurs et clients.
  </div>
</SwiperSlide>
<SwiperSlide className="flex flex-col max-w-[15vw]">
  <div className="min-w-[280px] h-[155px] bg-red-400"></div>
  <div>Fiable</div>
  <div>Quelqu'un sur qui on peut compter</div>
  <div>
    J'apprends constamment, cherchant à exceller pour offrir le meilleur
    à mes collaborateurs et clients.
  </div>
</SwiperSlide>
<SwiperSlide className="flex flex-col max-w-[15vw]">
  <div className="min-w-[280px] h-[155px] bg-red-600"></div>
  <div>Collaboratif</div>
  <div>Possède un vrai esprit d'équipe</div>
  <div>
    J'apprends constamment, cherchant à exceller pour offrir le meilleur
    à mes collaborateurs et clients.
  </div>
</SwiperSlide>
</Swiper> */
}
