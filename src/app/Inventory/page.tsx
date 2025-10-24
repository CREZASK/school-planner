"use client";

import Image from "next/image";
import { Navbar } from "../Navbar";
import { useEffect, useState } from "react";

export default function RoomManagementPage() {
  // Dummy data — replace with your real data later
  const rooms = [
    { id: 1, name: "Tables", Amount: "10" },
    { id: 2, name: "Chairs", Amount: "20" },
    { id: 3, name: "Cupboards", Amount: "30" },
    { id: 4, name: "Laptops", Amount: "100" },
    { id: 5, name: "Monitors", Amount: "50" },
  ];

  const [query, setQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [filterField, setFilterField] = useState<"name" | "amount">("name");
  const [students, setStudents] = useState<any[]>([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/getStudents.php`)
      .then((res) => res.json())
      .then(setStudents)
      .catch(console.error);
  }, []);

  // Filter rooms based on search query
  const filtered = rooms
    .filter((room) => {
      if (!query) return true;
      if (filterField === "name") {
        return room.name.toLowerCase().includes(query.toLowerCase());
      } else {
        return room.Amount.toLowerCase().includes(query.toLowerCase());
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
          src="/inventory.jpeg"
          alt="inventory"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white text-center drop-shadow-lg">
            Inventory
          </h1>
        </div>
      </section>

      {/* Students test api call */}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Students</h1>
        <ul className="space-y-2">
          {students.map((s) => (
            <li key={s.id} className="border p-2 rounded">
              {s.name} — {s.grade}
            </li>
          ))}
        </ul>
      </div>

      {/* Content Section */}
      <section className="max-w-5xl mx-auto px-4 py-10">
        {/* Search Bar */}
        <div className="mb-10">
          <label className="block mb-2 font-semibold">Search</label>
          <div className="flex gap-5 items-center">
            <input
              type="text"
              placeholder="Suchen..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full md:w-1/2 bg-gray-200 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1D3C6A]"
            />
            <button type="button">
              <Image alt="search" src="/search.png" width={25} height={25} />
            </button>
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

        {/* List of Rooms (Filtered) */}
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
                  <p className="text-sm text-gray-700">{room.Amount}</p>
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
