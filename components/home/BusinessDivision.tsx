"use client";

import { ArrowRight, Laptop, RadioTower } from "lucide-react";

export default function BusinessDivision() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-10">

        <div className="text-center mb-16">

          <span className="text-cyan-400 uppercase tracking-[4px] font-semibold">
            Our Business Divisions
          </span>

          <h2 className="text-5xl font-bold text-white mt-4">
            Complete Technology Solutions
          </h2>

          <p className="text-slate-300 mt-6 max-w-3xl mx-auto text-lg">
            GC Venture provides Enterprise IT Rental Solutions and Telecom
            Infrastructure Services to organizations across India.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* IT Rental */}

          <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-700 to-slate-900 p-10 transition duration-500 hover:-translate-y-3 hover:shadow-2xl">

            <Laptop
              size={60}
              className="text-cyan-300 mb-8"
            />

            <h3 className="text-4xl font-bold text-white">
              Enterprise IT Rental
            </h3>

            <p className="text-slate-300 mt-5 leading-8">
              Complete rental solutions for laptops, desktops,
              MacBooks, servers, firewalls and networking devices.
            </p>

            <ul className="mt-8 space-y-3 text-slate-200">

              <li>✓ Laptop Rental</li>

              <li>✓ Desktop Rental</li>

              <li>✓ Apple MacBook Rental</li>

              <li>✓ Server Rental</li>

              <li>✓ Firewall Rental</li>

              <li>✓ Switch & Router Rental</li>

            </ul>

            <button className="mt-10 flex items-center gap-2 text-cyan-300 font-semibold">

              Explore Services

              <ArrowRight size={18} />

            </button>

          </div>

          {/* Telecom */}

          <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-950 to-slate-900 p-10 transition duration-500 hover:-translate-y-3 hover:shadow-2xl">

            <RadioTower
              size={60}
              className="text-cyan-300 mb-8"
            />

            <h3 className="text-4xl font-bold text-white">
              Telecom Infrastructure
            </h3>

            <p className="text-slate-300 mt-5 leading-8">
              End-to-end telecom deployment including RF Survey,
              BTS Installation, Civil and Electrical Works.
            </p>

            <ul className="mt-8 space-y-3 text-slate-200">

              <li>✓ RF Survey</li>

              <li>✓ BTS Installation</li>

              <li>✓ Tower Civil Works</li>

              <li>✓ Electrical Works</li>

              <li>✓ OFC Deployment</li>

              <li>✓ Telecom Manpower</li>

            </ul>

            <button className="mt-10 flex items-center gap-2 text-cyan-300 font-semibold">

              Explore Services

              <ArrowRight size={18} />

            </button>

          </div>

        </div>

      </div>
    </section>
  );
}