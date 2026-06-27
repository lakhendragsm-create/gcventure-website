"use client";

import { Star } from "lucide-react";

const reviews = [
  {
    name: "Nokia India",
    company: "Telecom Project",
    review:
      "GC Venture consistently delivered quality laptops and technical support for our nationwide deployment.",
  },
  {
    name: "Corporate Client",
    company: "IT Rental",
    review:
      "Fast delivery, excellent equipment quality and responsive support team. Highly recommended.",
  },
  {
    name: "Enterprise Customer",
    company: "Infrastructure",
    review:
      "Professional engineers, reliable service and excellent response time across multiple locations.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-slate-100">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="uppercase tracking-[4px] text-sky-500 font-semibold">
            Testimonials
          </p>

          <h2 className="text-5xl font-bold mt-4">
            What Our Clients Say
          </h2>

          <p className="text-gray-600 mt-5 max-w-3xl mx-auto">
            Our customers trust us for reliable IT rental and telecom
            infrastructure services across India.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {reviews.map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition"
            >

              <div className="flex mb-6">
                {[1,2,3,4,5].map((star)=>(
                  <Star
                    key={star}
                    className="text-yellow-400 fill-yellow-400 w-5 h-5"
                  />
                ))}
              </div>

              <p className="text-gray-600 leading-8 mb-8">
                "{item.review}"
              </p>

              <h4 className="text-xl font-bold">
                {item.name}
              </h4>

              <p className="text-sky-500">
                {item.company}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}