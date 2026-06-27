"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/30">

      <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-6">

        <Link href="/" className="text-white">

          <h1 className="text-3xl font-bold">

            GC Venture

          </h1>

          <p className="text-xs tracking-widest">

            Enterprise Technology Solutions

          </p>

        </Link>

        <nav className="hidden lg:flex gap-8 text-white">

          <Link href="/">Home</Link>

          <Link href="/about">About</Link>

          <Link href="/it-rental">IT Rental</Link>

          <Link href="/telecom">Telecom</Link>

          <Link href="/industries">Industries</Link>

          <Link href="/contact">Contact</Link>

        </nav>

        <button className="bg-sky-500 hover:bg-sky-600 px-6 py-3 rounded-full text-white">

          Request Quote

        </button>

      </div>

    </header>
  );
}