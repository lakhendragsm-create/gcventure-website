"use client";

import {
  ShieldCheck,
  Headphones,
  Truck,
  Clock3,
  Laptop,
  MapPin,
} from "lucide-react";

const features = [
  {
    icon: Laptop,
    title: "5000+ IT Assets",
    text: "Large inventory of laptops, desktops, MacBooks, servers and networking devices.",
  },
  {
    icon: MapPin,
    title: "PAN India Coverage",
    text: "Fast delivery and onsite support across major Indian cities.",
  },
  {
    icon: Headphones,
    title: "24×7 Technical Support",
    text: "Dedicated engineers available whenever your business needs assistance.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    text: "Quick deployment for urgent enterprise projects and events.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise SLA",
    text: "Professional support backed by service-level commitments.",
  },
  {
    icon: Clock3,
    title: "12+ Years Experience",
    text: "Trusted by enterprises for IT rental and telecom infrastructure solutions.",
  },
];

export default function WhyChoose() {
  return (
    <section className="py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-16">

          <p className="text-sky-500 font-semibold tracking-[4px] uppercase">
            WHY CHOOSE US
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Why Businesses Choose GC Venture
          </h2>

          <p className="text-gray-600 mt-5 max-w-3xl mx-auto">
            We combine enterprise-grade equipment, experienced engineers,
            nationwide support and rapid deployment to deliver dependable IT
            rental and telecom infrastructure solutions.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 p-8 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-sky-100 flex items-center justify-center mb-6 group-hover:bg-sky-500 transition">

                <item.icon className="w-8 h-8 text-sky-600 group-hover:text-white" />

              </div>

              <h3 className="text-2xl font-bold mb-4">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {item.text}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}