"use client";

import Image from "next/image";
import { Laptop, RadioTower, ShieldCheck, Headphones } from "lucide-react";

const features = [
  {
    icon: Laptop,
    title: "IT Rental Solutions",
    desc: "Laptop, Desktop, MacBook, Server, Firewall and Network Equipment Rental.",
  },
  {
    icon: RadioTower,
    title: "Telecom Infrastructure",
    desc: "Civil, Electrical, RF Survey, BTS Installation and OFC Deployment.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Since 2013",
    desc: "Supporting enterprises with reliable technology and infrastructure services.",
  },
  {
    icon: Headphones,
    title: "24×7 Support",
    desc: "Dedicated technical support with nationwide service coverage.",
  },
];

export default function About() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          <div>
            <Image
              src="/images/about.jpg"
              alt="GC Venture"
              width={700}
              height={550}
              className="rounded-3xl shadow-xl object-cover"
            />
          </div>

          <div>

            <span className="text-cyan-600 font-semibold uppercase tracking-widest">
              About GC Venture
            </span>

            <h2 className="mt-4 text-5xl font-bold text-slate-900 leading-tight">
              Enterprise Technology &
              <br />
              Telecom Solutions
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-600">
              GC Venture Pvt Ltd delivers enterprise IT rental services and
              telecom infrastructure solutions across India. We help businesses
              deploy technology quickly with reliable equipment, skilled
              engineers and nationwide support.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-6">
              {features.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="rounded-2xl bg-white p-6 shadow-md hover:shadow-xl transition"
                  >
                    <Icon className="text-cyan-600 mb-4" size={32} />
                    <h3 className="font-bold text-xl">{item.title}</h3>
                    <p className="mt-3 text-slate-600">{item.desc}</p>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}