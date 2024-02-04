"use client";
import Image from "next/image";

import { motion } from "framer-motion";

export default function Header() {
  return (
    <div className="absolute top-0 h-[400px] w-full bg-background_image z-10">
      <motion.div
        initial={{ opacity: 0, y: 100, x: "-50%" }}
        animate={{ opacity: 1, y: 0, x: "-50%" }}
        transition={{ type: "easeInOut" }}
        className="absolute left-1/2 top-14"
      >
        <Image src="/js.png" alt="javascript logo" width={120} height={120} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 150, x: "-50%" }}
        animate={{ opacity: 1, y: "50%", x: "-50%" }}
        transition={{ delay: 0.1, type: "easeInOut" }}
        className="absolute left-1/3 bottom-1/2"
      >
        <Image src="/react.png" alt="react logo" width={120} height={120} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 150, x: "50%" }}
        animate={{ opacity: 1, y: "50%", x: "50%" }}
        transition={{ delay: 0.2, type: "easeInOut" }}
        className="absolute right-1/3 bottom-1/2"
      >
        <Image src="/next.png" alt="react logo" width={120} height={120} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, type: "easeInOut" }}
        className="absolute right-44 bottom-10"
      >
        <Image src="/photoshop.png" alt="react logo" width={100} height={100} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, type: "easeInOut" }}
        className="absolute left-44 bottom-10"
      >
        <Image src="/figma.png" alt="react logo" width={100} height={100} />
      </motion.div>
    </div>
  );
}
