"use client";

import { ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden bg-[#081E45]">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: "url('/images/hero-it.jpg')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#081E45] via-[#081E45]/90 to-[#081E45]/60" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-6">

        <div className="max-w-3xl">

          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-5 py-2 rounded-full border border-cyan-400 bg-cyan-400/10 text-cyan-300"
          >
            Enterprise IT Rental & Telecom Solutions
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 text-6xl lg:text-7xl font-black leading-tight text-white"
          >
            Powering
            <br />
            Enterprises with
            <br />
            <span className="text-cyan-400">Technology</span> Solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8 text-xl leading-9 text-gray-200"
          >
            Corporate Laptop Rental, Desktop Rental, Apple MacBook Rental,
            Server Rental, Firewall Rental, Telecom Civil Works,
            Electrical Works and RF Services across India.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-5 mt-10"
          >
            <button className="flex items-center gap-2 rounded-full bg-cyan-500 px-8 py-4 font-semibold text-white hover:bg-cyan-600 transition">
              Request Quote
              <ArrowRight size={20} />
            </button>

            <button className="flex items-center gap-2 rounded-full border border-white px-8 py-4 text-white hover:bg-white hover:text-blue-900 transition">
              Download Profile
              <Download size={18} />
            </button>
          </motion.div>
        </div>

      </div>

      {/* Floating Stats */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-6xl px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

          {[
            ["10+", "Years Experience"],
            ["5000+", "IT Assets"],
            ["PAN India", "Support Network"],
            ["24×7", "Technical Support"],
          ].map(([value, label], i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + i * 0.2 }}
              className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl"
            >
              <h2 className="text-4xl font-bold text-cyan-400">{value}</h2>
              <p className="mt-2 text-gray-200">{label}</p>
            </motion.div>
          ))}

        </div>
      </div>

    </section>
  );
}