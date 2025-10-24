import Image from "next/image";
import Link from "next/link";
import { Navbar } from "../Navbar";
import { link } from "fs";

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
    <main className="w-full min-h-screen bg-[#F3EED9] text-[#F3EED9] flex flex-col">
      <Navbar />

      {/* Sections */}
      <div className="flex flex-col gap-10 p-8 max-w-6xl mx-auto">
        {sections.map((s, i) => (
          <div
            key={i}
            className={`flex flex-col md:flex-row ${
              i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } items-center gap-4`}
          >
            <div className="flex-1 bg-[#1D3C6A] rounded-2xl h-[200px] flex justify-center items-center text-center text-lg font-semibold">
              {s.title}
            </div>
            <div className="flex-1">
              <Link href={s.link}>
                <Image
                  src={s.img}
                  alt={s.title}
                  width={600}
                  height={400}
                  className="rounded-2xl object-cover w-full h-[200px]"
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
