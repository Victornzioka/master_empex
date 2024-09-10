import { client, urlFor } from "@/lib/client";

export async function getServices() {
  const data = await client.fetch(`*[_type == "services"]`);

  return {
    data,
  };
}

const Services = async () => {
  const res = await getServices();

  return (
    <div className="bg-gradient-to-b from-[#D2DCFF] to-[#fff]">
      <div className="container">
        <div className="section-heading mb-24">
          <div className="flex justify-center">
            <div className="tag">Services</div>
          </div>
          <h2 className="section-title mt-5">We do things differently....</h2>
          <p className="section-description mt-5">
            Comprehensive logistics solutions tailored to meet your unique
            needs, from freight forwarding to warehousing and distribution
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          {res.data.map((service) => (
            <div key={service.title} className="">
              <img src={urlFor(service.image).height(250).url()} />
              <div>
                <h1 className="font-bold mb-3 mt-3">{service.title}</h1>
                <p className="text-black/70 mb-6">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
