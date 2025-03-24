'use client';
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-4 bg-[#e8e8e5] shadow-md">
      {/* Logo */}
      <div className="text-xl font-bold">Code 4Bhart</div>

      {/* Hamburger Menu for Mobile */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden focus:outline-none"
      >
        <img
          src={
            menuOpen
              ? "https://img.icons8.com/fluent-systems-regular/2x/close-window.png"
              : "https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png"
          }
          width="35"
          height="35"
          alt="Menu Toggle"
        />
      </button>

      {/* Navigation Links */}
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } w-full md:w-auto md:flex flex-col md:flex-row text-center font-semibold mt-4 md:mt-0`}
      >
        <Link href="/Home" className="block md:inline-block hover:text-blue-500 px-4 py-2">
          Home
        </Link>
        <Link href="/about" className="block md:inline-block hover:text-blue-500 px-4 py-2">
          About
        </Link>
        <Link href="/contact" className="block md:inline-block hover:text-blue-500 px-4 py-2">
          Contact
        </Link>
        <Link href="/Login" className="block md:inline-block hover:text-blue-500 px-4 py-2">
          Login
        </Link>
      </div>
    </nav>
  );
}
