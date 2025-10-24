import Image from "next/image";
import React, { use } from "react";

export const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-8 py-4">
      <Image src="/logo.png" alt="Logo" width={32} height={32} />
      <div className="flex gap-6 justify-center">
        <a
          href="/homepage"
          className="text-sm font-medium text-black hover:underline"
        >
          HOME
        </a>
        <a href="/" className="text-sm font-medium text-black hover:underline">
          SIGN OUT
        </a>
      </div>
    </div>
  );
};
