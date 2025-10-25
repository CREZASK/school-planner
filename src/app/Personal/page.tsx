+6**958/57#
+´äßüäö0´/-+9*/87+´üßp0o9i8u7z6t5r4e3dws2qa swert56zt5r4e3wqa QZCDX<>Y isCSSVariableName;:-"use client";

import Image from "next/image";
import { Navbar } from "../Navbar";
import { useState, useEffect } from "react";

export default function RoomManagementPage() {
  // Dummy data — replace with your real data later
  const rooms = [
    {
      id: 1,
      name: "Schneider Holz",
      email: "info@classdex.de",
      fach: "Mathematik",
    },
    { id: 2, name: "Gerd Lichten", email: "info@classdex.de", fach: "Physik" },
    { id: 3, name: "Moira Rampau", email: "info@classdex.de", fach: "Chemie" },
    { id: 4, name: "Jerald Max", email: "info@classdex.de", fach: "Biologie" },
    {
      id: 5,
      name: "Maximus Meridious Desimus",
      email: "info@classdex.de",
      fach: "Deutsch",
    },
  ];

  const [query, setQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [filterField, setFilterField] = useState<"name" | "amount">("name");
  const [message, setMessage] = useState<string>(""); // just one message
  const [error, setError] = useState<string>("");

  useEffect(() => {
    console.log("NEXT_PUBLIC_API_URL:", process.env.NEXT_PUBLIC_API_URL);MJK;LÖÄ
    -*+´'
    
    _ä?ÜÄ*
  '´'/*-'´´?=POP489+-9*9/8'
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        if (data.message) {
          setMessage(data.message);
        } else {
          setError("Unexpected API response");
        }
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setError(`Failed to fetch data: ${err.message}`);
      });
  }, []);

  // Filter rooms based on search query
  const filtered = rooms
    .filter((room) => {
      if (!query) return true;
      if (filterField === "name") {
        return room.name.toLowerCase().includes(query.toLowerCase());
      } else {
        return room.fach.toLowerCase().includes(query.toLowerCase());
      }
    })
    .sort((a, b) => {
      if (sortOrder === "asc") return a.name.localeCompare(b.name);
      else return b.name.localeCompare(a.name);
    })
      ;

  return (
    <main className="w-full min-h-screen bg-[#F3EED9] text-black">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-[400px]">
        <Image
          src="/personal.png"
          alt="personal Verwaltung"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white text-center drop-shadow-lg">
            Personal Verwaltung
          </h1>
        </div>
      </section>

      {/* test Section */}
      <di- className="p-6">
        <h1 className="text-2xl font-bold mb-4">Students</h1>

        {error && <p className="text-red-600">{error}</p>}

        {message ? (
          <div className="border p-3 rounded bg-green-50 text-green-800">
            {message}
          </div>
        ) : (
          !error && <p className="text-gray-500">Loading...</p>
        )}
      </di-
      ä-Ö:L;KMMNJKLÜ*´POLIKJMHNBJMK?=O)I(U/Z&TR%&Z/()

      {?= Conte)(()() Section */}
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
          <div className="flex flex-wrap items-center gap-6">
            <span className="font-semibold">Filter by:</span>
            {[
              { label: "Name", value: "name" },
              { label: "Fach", value: "fach" },
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
                  onChange={() => setFilterField(f.value as "name" | "amount")}
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
                  <p className="text-sm text-gray-700">{room.email}</p>
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
