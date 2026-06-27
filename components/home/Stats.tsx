"use client";

import { Laptop, Users, Headphones, Briefcase } from "lucide-react";

const stats = [
  {
    icon: Laptop,
    number: "5000+",
    title: "IT Assets",
  },
  {
    icon: Users,
    number: "1200+",
    title: "Corporate Clients",
  },
  {
    icon: Headphones,
    number: "24×7",
    title: "Technical Support",
  },
  {
    icon: Briefcase,
    number: "12+",
    title: "Years Experience",
  },
];

export default function Stats() {
  return (
    <section className="py-24 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="uppercase tracking-[4px] text-sky-400 font-semibold">
            OUR ACHIEVEMENTS
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Trusted Across India
          </h2>

          <p className="text-gray-300 mt-5 max-w-3xl mx-auto">
            Delivering enterprise IT rental and telecom infrastructure
            solutions with reliability, speed and nationwide support.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur rounded-3xl p-8 text-center hover:bg-sky-600 transition duration-300"
            >
              <item.icon className="w-12 h-12 mx-auto text-sky-400 mb-6" />

              <h3 className="text-5xl font-bold">
                {item.number}
              </h3>

              <p className="mt-4 text-gray-300">
                {item.title}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}