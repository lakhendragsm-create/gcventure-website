"use client";

import {
  Laptop,
  Monitor,
  Server,
  Shield,
  RadioTower,
} from "lucide-react";

import ServiceCard from "@/components/common/ServiceCard";

const services = [
  {
    title: "Laptop Rental",
    description: "Enterprise laptops available on rent across India.",
    image: "/images/services/laptop.jpg",
    icon: <Laptop size={48} />,
  },
  {
    title: "Desktop Rental",
    description: "Powerful desktops for offices, training and projects.",
    image: "/images/services/desktop.jpg",
    icon: <Monitor size={48} />,
  },
  {
    title: "Apple MacBook Rental",
    description: "MacBook Air & Pro available for creative professionals.",
    image: "/images/services/macbook.jpg",
    icon: <Laptop size={48} />,
  },
  {
    title: "Server Rental",
    description: "Enterprise rack servers and storage solutions.",
    image: "/images/services/server.jpg",
    icon: <Server size={48} />,
  },
  {
    title: "Firewall Rental",
    description: "Fortinet, Sophos, Cisco and SonicWall firewalls.",
    image: "/images/services/firewall.jpg",
    icon: <Shield size={48} />,
  },
  {
    title: "Telecom Infrastructure",
    description: "RF Survey, BTS Installation, OFC and Civil Works.",
    image: "/images/services/telecom.jpg",
    icon: <RadioTower size={48} />,
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-slate-100">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-cyan-600 uppercase tracking-[4px] font-semibold">
            Featured Services
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Complete Enterprise Solutions
          </h2>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            Professional IT Rental and Telecom Infrastructure
            Services delivered across India.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

          {services.map((service, index) => (

            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
              icon={service.icon}
            />

          ))}

        </div>

      </div>

    </section>
  );
}