import ects from "@/assets/ects.png";

import Image from "next/image";
import Link from "next/link";

import { client, urlFor } from "@/lib/client";

export async function getFeatures() {
  const data = await client.fetch(`*[_type == "features"]`);

  return {
    data,
  };
}

export const Features = async () => {
  const res = await getFeatures();
  const features = res.data.slice(0, 3);

  return (
    <section className="bg-gradient-to-b from-[#D2DCFF] to-[#fff]">
      <div className="container">
        <div className="section-heading mb-24">
          <div className="flex justify-center">
            <div className="tag">Features</div>
          </div>
          <h2 className="section-title mt-5">
            Powerful features that set us apart
          </h2>
          <p className="section-description italic text-black/40 mt-5">
            Choose us for reliable, efficient logistics solutions and
            exceptional customer service that exceeds expectations
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          {features.map((feature) => (
            <div key={feature.title} className="">
              <img src={urlFor(feature.image).height(250).url()} />
              <div>
                <h1 className="font-black text-[#293a8c] mb-3 mt-3">
                  {feature.title}
                </h1>
                <p className="text-black/70 mb-6">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center pb-10">
          <Link
            href="/features"
            className="bg-[#293a8c] text-[#fff] p-4 rounded-lg"
          >
            Explore Additional Features
          </Link>
        </div>
      </div>
    </section>
  );
};
