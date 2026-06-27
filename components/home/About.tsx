"use client";

import Image from "next/image";
import { CheckCircle2, Laptop, RadioTower, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: <Laptop size={32} />,
    title: "Enterprise IT Rental",
    description:
      "Laptops, Desktops, MacBooks, Servers, Firewalls and Network Equipment on Rent.",
  },
  {
    icon: <RadioTower size={32} />,
    title: "Telecom Infrastructure",
    description:
      "Civil Works, RF Survey, BTS Installation, Electrical Works and OFC Deployment.",
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Trusted Partner",
    description:
      "Serving enterprises, telecom companies and government organizations since 2013.",
  },
];

export default function About() {
  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <Image
              src="/images/about.jpg"
              alt="About GC Venture"
              width={700}
              height={650}
              className="rounded-3xl shadow-2xl"
            />
          </div>

          <div>

            <span className="text-cyan-600 font-semibold tracking-widest uppercase">
              About GC Venture
            </span>

            <h2 className="text-5xl font-black text-slate-900 mt-4 leading-tight">
              Enterprise Technology
              <br />
              Solutions Across India
            </h2>

            <p className="mt-8 text-gray-600 leading-8 text-lg">
              GC Venture Pvt Ltd is one of India's trusted providers of
              Enterprise IT Rental Solutions and Telecom Infrastructure
              Services. We support organizations with reliable technology,
              skilled manpower and nationwide service delivery.
            </p>

            <div className="mt-10 space-y-5">

              <div className="flex gap-4 items-center">
                <CheckCircle2 className="text-cyan-500" />
                <p>Premium Enterprise Laptop Rental Services</p>
              </div>

              <div className="flex gap-4 items-center">
                <CheckCircle2 className="text-cyan-500" />
                <p>Nationwide Telecom Infrastructure Projects</p>
              </div>

              <div className="flex gap-4 items-center">
                <CheckCircle2 className="text-cyan-500" />
                <p>24×7 Technical Support Team</p>
              </div>

            </div>

          </div>

        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">

          {features.map((item, index) => (

            <div
              key={index}
              className="rounded-3xl border border-slate-200 p-8 hover:shadow-2xl transition duration-300"
            >
              <div className="text-cyan-600 mb-6">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold">
                {item.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}