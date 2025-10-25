"use client";

import Image from "next/image";
import Link from "next/link";
import { Navbar } from "../Navbar";
import { motion } from "framer-motion";

const sections = [
  {
    title: "Räume Verwaltung",
    img: "/räüme-sample.jpg",
    link: "/Rooms",
  },
  {
    title: "Personal Verwaltung",
    img: "/personal.png",
    link: "/Personal",
  },
  {
    title: "Student Verwaltung",
    img: "/student-sample.jpg",
    link: "/Student",
  },
  {
    title: "Inventory",
    img: "/inventory.jpeg",
    link: "/Inventory",
  },
];

export default function HomePage() {
  return (
    <main className="w-full min-h-screen bg-[#954C2E] text-[#F3EED9] flex flex-col">
      <Navbar />

      <motion.div
        className="flex flex-col gap-20 py-20 px-6 md:px-20 w-full mx-auto max-w-6xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {sections.map((s, i) => (
          <motion.div
            key={i}
            className={`flex flex-col md:flex-row ${
              i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } items-center gap-6`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            {/* Title Block */}
            <Link href={s.link} className="flex-1">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#1D3C6A] rounded-2xl text-3xl md:text-4xl h-[200px] flex justify-center items-center text-center font-semibold shadow-lg transition-all duration-300 cursor-pointer"
              >
                {s.title}
              </motion.div>
            </Link>

            {/* Image Block */}
            <Link href={s.link} className="flex-1">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Image
                  src={s.img}
                  alt={s.title}
                  width={600}
                  height={400}
                  className="rounded-2xl object-cover w-full h-[200px] shadow-lg"
                />
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
}
