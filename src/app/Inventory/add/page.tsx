"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="bg-(--color-bg) rounded-3xl w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] p-10 flex flex-col md:flex-row justify-between items-center shadow-xl">
      {/* Left side */}
      <div className="text-(--color-primary) text-center md:text-left font-bold text-3xl md:text-4xl lg:text-5xl w-full md:w-1/2">
        <p>
          Füge eine Neu
          <br />
          Raum hinzu
        </p>
      </div>

      {/* Right side */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0">
        <h2 className="text-(--color-primary) font-bold text-2xl mb-6 text-center">
          Hinzufügen
        </h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="firstName">Inventory name</Label>
            <Input id="firstName" className="bg-gray-200 border-none" />
          </div>
          <div>
            <Label htmlFor="lastName">Zahlen</Label>
            <Input id="lastName" className="bg-gray-200 border-none" />
          </div>
        </form>

        <div className="flex justify-end space-x-4 mt-8">
          <Button
            asChild
            type="button"
            className="bg-(--color-accent) hover:bg-accent/90 shadow-md px-6 py-2 rounded-none"
          >
            <Link href="/Inventory">Stornieren</Link>
          </Button>

          <Button
            asChild
            type="submit"
            className="bg-(--color-accent) hover:bg-accent/90 shadow-md px-6 py-2 rounded-none"
          >
            <Link href="/Inventory">Weitergehen</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
