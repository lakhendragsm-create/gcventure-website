"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

export default function ServiceCard({
  title,
  description,
  image,
  icon,
}: ServiceCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-3xl h-[420px] shadow-xl">

      {/* Background Image */}
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">

        <div className="mb-5 text-cyan-400">
          {icon}
        </div>

        <h3 className="text-3xl font-bold mb-3">
          {title}
        </h3>

        <p className="text-slate-200 leading-7 mb-6">
          {description}
        </p>

        <button className="flex items-center gap-2 text-cyan-300 font-semibold group-hover:gap-4 transition-all">
          Learn More
          <ArrowRight size={18} />
        </button>

      </div>

    </div>
  );
}