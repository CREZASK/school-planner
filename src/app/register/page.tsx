"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    vorname: "",
    nachname: "",
    email: "",
    password: "",
    gruppename: "",
    confirmPassword: "",
    gender: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    // Check if all required fields are filled
    const requiredFields = [
      "vorname",
      "nachname",
      "email",
      "password",
      "gruppename",
      "confirmPassword",
      "gender",
    ] as const;
    const emptyFields = requiredFields.filter(
      (field) => !form[field as keyof typeof form]
    );

    if (emptyFields.length > 0) {
      setMessage(`Please fill in: ${emptyFields.join(", ")}`);
      return;
    }

    setMessage("Registering...");

    // Log exact payload being sent
    const payload = JSON.stringify(form, null, 2);
    console.log("Exact JSON payload being sent:", payload);
    console.log("Payload length:", payload.length, "bytes");

    try {
      const res = await fetch(`/api/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Add explicit content length
          "Content-Length": String(payload.length),
        },
        body: payload,
      });

      console.log("Response status:", res.status, res.statusText);
      const text = await res.text();
      console.log("Server response:", text);

      // Show the response for 2 seconds before redirecting
      setMessage(`Server response: ${text}`);
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } catch (err) {
      console.error("Error sending form data:", err);
      setMessage(
        "Error: " + (err instanceof Error ? err.message : String(err))
      );
    }
  };

  return (
    <div className="bg-(--color-bg) rounded-3xl w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] p-10 flex flex-col md:flex-row justify-between items-center shadow-xl">
      {/* Left side */}
      <div className="text-(--color-primary) text-center md:text-left font-bold text-3xl md:text-4xl lg:text-5xl w-full md:w-1/2">
        <p>
          Wilkommen
          <br />
          bei ClassDex
        </p>
      </div>

      {/* Right side */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0">
        <h2 className="text-(--color-primary) font-bold text-2xl mb-6 text-center">
          Registrierung
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <div>
            <Label htmlFor="vorname">Vorname</Label>
            <Input
              id="vorname"
              name="vorname"
              onChange={handleChange}
              className="bg-gray-200 border-none"
            />
          </div>
          <div>
            <Label htmlFor="nachname">Nachname</Label>
            <Input
              id="nachname"
              name="nachname"
              onChange={handleChange}
              className="bg-gray-200 border-none"
            />
          </div>
          <div>
            <Label htmlFor="email">E-Mail</Label>
            <Input
              id="email"
              name="email"
              type="email"
              onChange={handleChange}
              className="bg-gray-200 border-none"
            />
          </div>
          <div>
            <Label htmlFor="gruppename">Gruppenname</Label>
            <Input
              id="gruppename"
              name="gruppename"
              onChange={handleChange}
              className="bg-gray-200 border-none"
            />
          </div>
          <div>
            <Label htmlFor="password">Passwort</Label>
            <Input
              id="password"
              name="password"
              type="password"
              onChange={handleChange}
              className="bg-gray-200 border-none"
            />
          </div>
          <div>
            <Label htmlFor="confirmPassword">Passwort wiederschreiben</Label>
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              onChange={handleChange}
              className="bg-gray-200 border-none"
            />
          </div>
          {/* Gender Section */}
          <div className="flex space-x-6 mt-6">
            {["Male", "Female", "Prefer not to say"].map((g) => (
              <label key={g} className="flex items-center space-x-2 text-sm">
                <input
                  type="radio"
                  name="gender"
                  value={g}
                  checked={form.gender === g}
                  onChange={handleChange}
                  className="accent-(--color-accent)"
                />
                <span>{g}</span>
              </label>
            ))}
          </div>

          <div className="flex justify-end space-x-4 mt-8">
            <Button
              type="button"
              onClick={() => router.push("/")}
              className="bg-(--color-accent) hover:bg-accent/90 shadow-md px-6 py-2 rounded-none"
            >
              Stornieren
            </Button>

            <Button
              type="submit"
              className="bg-(--color-accent) hover:bg-accent/90 shadow-md px-6 py-2 rounded-none"
            >
              Weitergehen
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
