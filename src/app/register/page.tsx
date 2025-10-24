"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="bg-[var(--color-bg)] rounded-3xl w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] p-10 flex flex-col md:flex-row justify-between items-center shadow-xl">
      {/* Left side */}
      <div className="text-[var(--color-primary)] text-center md:text-left font-bold text-3xl md:text-4xl lg:text-5xl w-full md:w-1/2">
        <p>
          Wilkommen
          <br />
          bei unsere
          <br />
          Website
        </p>
      </div>

      {/* Right side */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0">
        <h2 className="text-[var(--color-primary)] font-bold text-2xl mb-6 text-center">
          Registrierung
        </h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="firstName">Vorname</Label>
            <Input id="firstName" className="bg-gray-200 border-none" />
          </div>
          <div>
            <Label htmlFor="lastName">Nachname</Label>
            <Input id="lastName" className="bg-gray-200 border-none" />
          </div>
          <div>
            <Label htmlFor="email">E-Mail</Label>
            <Input
              id="email"
              type="email"
              className="bg-gray-200 border-none"
            />
          </div>
          <div>
            <Label htmlFor="group">Gruppenname</Label>
            <Input id="group" className="bg-gray-200 border-none" />
          </div>
          <div>
            <Label htmlFor="password">Passwort</Label>
            <Input
              id="password"
              type="password"
              className="bg-gray-200 border-none"
            />
          </div>
          <div>
            <Label htmlFor="confirmPassword">Passwort wiederschreiben</Label>
            <Input
              id="confirmPassword"
              type="password"
              className="bg-gray-200 border-none"
            />
          </div>
        </form>

        {/* Gender Section */}
        <div className="flex space-x-6 mt-6">
          {["Male", "Female", "Prefer not to say"].map((g) => (
            <label key={g} className="flex items-center space-x-2 text-sm">
              <input
                type="radio"
                name="gender"
                className="accent-[var(--color-accent)]"
              />
              <span>{g}</span>
            </label>
          ))}
        </div>

        <div className="flex justify-end space-x-4 mt-8">
          <Button
            asChild
            type="button"
            className="bg-[var(--color-accent)] hover:bg-[var(--color-accent)]/90 shadow-md px-6 py-2 rounded-none"
          >
            <Link href="/">Stornieren</Link>
          </Button>

          <Button
            asChild
            type="submit"
            className="bg-[var(--color-accent)] hover:bg-[var(--color-accent)]/90 shadow-md px-6 py-2 rounded-none"
          >
            <Link href="/login">Weitergehen</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
