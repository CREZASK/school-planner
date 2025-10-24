"use client";

import Image from "next/image";
import { Navbar } from "../Navbar";
import { useState } from "react";

export default function RoomManagementPage() {
  // Dummy data — replace with your real data later
  const rooms = [
    { id: 1, name: "Raum 101", gebäude: "xyz", fach: "Mathematik" },
    { id: 2, name: "Raum 102", gebäude: "xdz", fach: "Physik" },
    { id: 3, name: "Raum 103", gebäude: "xyz", fach: "Chemie" },
    { id: 4, name: "Raum 104", gebäude: "xsyz", fach: "Biologie" },
    { id: 5, name: "Raum 105", gebäude: "xyfz", fach: "Deutsch" },
    { id: 5, name: "Bibliothek", gebäude: "xyz", fach: "None" },
  ];

  const [query, setQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [filterField, setFilterField] = useState<"name" | "gebäude">("name");

  // Filter rooms based on search query
  const filtered = rooms
    .filter((room) => {
      if (!query) return true;
      if (filterField === "name") {
        return room.name.toLowerCase().includes(query.toLowerCase());
      } else {
        return room.gebäude.toLowerCase().includes(query.toLowerCase());
      }
    })
    .sort((a, b) => {
      if (sortOrder === "asc") return a.name.localeCompare(b.name);
      else return b.name.localeCompare(a.name);
    });

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
        {/* Search + Filter + Sort */}
        <div className="mb-10 space-y-6">
          {/* Search Bar */}
          <div>
            <label className="block mb-2 font-semibold">Search</label>
            <input
              type="text"
              placeholder="Suchen..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full md:w-1/2 bg-gray-200 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1D3C6A]"
            />
            <div />
            {/* filter Section */}

            <div className="flex flex-wrap items-center gap-6">
              <span className="font-semibold">Filter by:</span>
              {[
                { label: "Name", value: "name" },
                { label: "Gebäude", value: "gebäude" },
              ].map((f) => (
                <label
                  key={f.value}
                  className="flex items-center space-x-2 text-sm"
                >
                  <input
                    type="radio"
                    name="filterField"
                    value={f.value}
                    checked={filterField === f.value}
                    onChange={() =>
                      setFilterField(f.value as "name" | "gebäude")
                    }
                    className="accent-[#1D3C6A]"
                  />
                  <span>{f.label}</span>
                </label>
              ))}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center space-x-3 py-3">
              <span className="font-semibold">Sort:</span>
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value as "asc" | "desc")}
                className="bg-gray-200 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1D3C6A]"
              >
                <option value="asc">A–Z</option>
                <option value="desc">Z–A</option>
              </select>
            </div>
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
                <div className="w-28 h-28 bg-gray-300 rounded-md shrink-0"></div>

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
