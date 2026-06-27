"use client";

import Image from "next/image";

const clients = [
  "/logo/nokia.png",
  "/logo/airtel.png",
  "/logo/ericsson.png",
  "/logo/huawei.png",
  "/logo/indus.png",
  "/logo/teleperformance.png",
  "/logo/techmahindra.png",
  "/logo/wipro.png",
  "/logo/hcl.png",
  "/logo/tcs.png",
  "/logo/infosys.png",
  "/logo/dell.png",
];

export default function Clients() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">

          <p className="text-sky-500 uppercase tracking-[4px] font-semibold">
            TRUSTED BY
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Leading Enterprises Across India
          </h2>

          <p className="text-gray-600 mt-5 max-w-3xl mx-auto">
            We proudly support enterprise customers, telecom companies,
            BPOs, software organizations and infrastructure providers
            with dependable technology solutions.
          </p>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {clients.map((logo, index) => (

            <div
              key={index}
              className="bg-white border rounded-2xl shadow hover:shadow-xl transition duration-300 p-8 flex items-center justify-center h-40"
            >

              <Image
                src={logo}
                alt="Client"
                width={140}
                height={60}
                className="object-contain grayscale hover:grayscale-0 transition duration-300"
              />

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}