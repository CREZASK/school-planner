"use client";

import Image from "next/image";
import { Navbar } from "../Navbar";
import { useState } from "react";

export default function RoomManagementPage() {
  // Dummy data — replace with your real data later
  const rooms = [
    { id: 1, name: "Raum 101", gebäude: "xyz", fach: "Mathematik" },
    { id: 2, name: "Raum 102", gebäude: "xyz", fach: "Physik" },
    { id: 3, name: "Raum 103", gebäude: "xyz", fach: "Chemie" },
    { id: 4, name: "Raum 104", gebäude: "xyz", fach: "Biologie" },
    { id: 5, name: "Raum 105", gebäude: "xyz", fach: "Deutsch" },
  ];

  const [query, setQuery] = useState("");

  // Filter rooms based on search query
  const filtered = rooms.filter((room) =>
    room.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main className="w-full min-h-screen bg-[#F3EED9] text-black">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-[400px]">
        <Image
          src="/räüme-sample.jpg"
          alt="Räume Verwaltung"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white text-center drop-shadow-lg">
            Räume Verwaltung
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-5xl mx-auto px-4 py-10">
        {/* Search Bar */}
        <div className="mb-10">
          <label className="block mb-2 font-semibold">Search</label>
          <input
            type="text"
            placeholder="Suchen..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full md:w-1/2 bg-gray-200 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1D3C6A]"
          />
          {/* filter Section */}

          <div className="flex space-x-6 mt-6">
            <a className="bg-[#1D3C6A] text-white px-4 py-2 rounded-md hover:bg-[#16325A] transition">
              Filter
            </a>
            {["Raum", "Gebäude"].map((g) => (
              <label key={g} className="flex items-center space-x-2 text-sm">
                <input
                  type="radio"
                  name="Raum"
                  className="accent-[var(--color-accent)]"
                />
                <span>{g}</span>
              </label>
            ))}
          </div>
        </div>

        {/* List of Rooms */}
        <div className="flex flex-col gap-8">
          {filtered.length > 0 ? (
            filtered.map((room) => (
              <div
                key={room.id}
                className="flex items-center gap-6 bg-[#F3EED9] rounded-lg border-b border-gray-300 pb-4"
              >
                {/* Placeholder Image */}
                <div className="w-28 h-28 bg-gray-300 rounded-md flex-shrink-0"></div>

                {/* Info */}
                <div>
                  <p className="font-bold">{room.name}</p>
                  <p className="text-sm text-gray-700">{room.gebäude}</p>
                  <p className="text-sm font-medium">{room.fach}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-600">No results found.</p>
          )}
        </div>
      </section>
    </main>
  );
}
