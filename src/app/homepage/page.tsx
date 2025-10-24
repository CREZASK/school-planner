import Image from "next/image";
import Link from "next/link";

const sections = [
  {
    title: "Räume Verwaltung",
    img: "/räüme-sample.jpg",
  },
  {
    title: "Personal Verwaltung",
    img: "/personal.png",
  },
  {
    title: "Student Verwaltung",
    img: "/student-sample.jpg",
  },
  {
    title: "Inventory",
    img: "/inventory.jpeg",
  },
];

export default function HomePage() {
  return (
    <main className="w-full min-h-screen bg-[#F3EED9] text-[#F3EED9] flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-4">
        <Image className="" src="/logo.png" alt="Logo" width={32} height={32} />
        <div className="flex gap-6 justify-center">
          <a
            href="/homepage"
            className="text-sm font-medium text-black hover:underline"
          >
            HOME
          </a>
          <a
            href="/logout"
            className="text-sm font-medium text-black hover:underline"
          >
            SIGN OUT
          </a>
        </div>
      </header>

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
              <Link href="/Rooms">
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
