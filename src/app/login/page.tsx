"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="bg-(--color-bg) rounded-3xl w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] p-10 flex flex-col md:flex-row justify-between items-center shadow-xl">
      {/* Left side */}
      <div className="text-(--color-primary) text-center md:text-left font-bold text-3xl md:text-4xl lg:text-5xl w-full md:w-1/2">
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
        <h2 className="text-(--color-primary) font-bold text-2xl mb-6 text-center">
          Anmeldung
        </h2>

        <form className="space-y-4">
          <div>
            <Label htmlFor="email">E-Mail</Label>
            <Input
              id="email"
              type="email"
              className="bg-gray-200 border-none"
            />
          </div>

          <div>
            <Label htmlFor="password">Passwort</Label>
            <Input
              id="password"
              type="password"
              className="bg-gray-200 border-none"
            />
          </div>

          <p className="text-xs mt-1 text-right text-(--color-primary) cursor-pointer hover:underline">
            Forgot password?
          </p>

          <div className="flex justify-end space-x-4 mt-6">
            <Button
              type="button"
              className="bg-(--color-accent) hover:bg-accent/90 shadow-md px-6 py-2 rounded-none"
            >
              <Link href="/">Stornieren</Link>
            </Button>
            <Button
              type="submit"
              className="bg-(--color-accent) hover:bg-accent/90 shadow-md px-6 py-2 rounded-none"
            >
              <Link href="/homepage">Weitergehen</Link>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
