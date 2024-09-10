import ects from "@/assets/ects.png";
import temperature_truck from "@/assets/temperature-controlled-trucks.png";
import Image from "next/image";
import Link from "next/link";

import { client, urlFor } from "@/lib/client";

export async function getServices() {
  const data = await client.fetch(`*[_type == "services"]`);

  return {
    data,
  };
}

export const Services = async () => {
  const res = await getServices();
  const services = res.data.slice(0, 3);

  return (
    <section className="bg-gradient-to-b from-[#D2DCFF] to-[#fff]">
      <div className="container">
        <div className="section-heading mb-24">
          <div className="flex justify-center">
            <div className="tag">Services</div>
          </div>
          <h2 className="section-title mt-5">We do things differently....</h2>
          <p className="section-description italic text-black/40 mt-5">
            Comprehensive logistics solutions tailored to meet your unique
            needs, from freight forwarding to warehousing and distribution
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          {services.map((service) => (
            <div key={service.title} className="">
              <img src={urlFor(service.image).height(250).url()} />
              <div>
                <h1 className="font-black text-[#293a8c] mb-3 mt-3">
                  {service.title}
                </h1>
                <p className="text-black/70 mb-6">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center pb-10">
          <Link
            href="/services"
            className="bg-[#293a8c] text-[#fff] p-4 rounded-lg"
          >
            Explore Additional Services
          </Link>
        </div>
      </div>
    </section>
  );
};
