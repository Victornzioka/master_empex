import { client, urlFor } from "@/lib/client";

export async function getFeatures() {
  const data = await client.fetch(`*[_type == "features"]`);

  return {
    data,
  };
}

const Features = async () => {
  const res = await getFeatures();

  return (
    <div className="bg-gradient-to-b from-[#D2DCFF] to-[#fff]">
      <div className="container">
        <div className="section-heading mb-24">
          <div className="flex justify-center">
            <div className="tag">Features</div>
          </div>
          <h2 className="section-title mt-5">
            Powerful features that set us apart
          </h2>
          <p className="section-description mt-5">
            Choose us for reliable, efficient logistics solutions and
            exceptional customer service that exceeds expectations
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {res.data.map((feature) => (
            <div key={feature.title} className="">
              <img src={urlFor(feature.image).height(250).url()} />
              <div>
                <h1 className="font-bold mb-3 mt-3">{feature.title}</h1>
                <p className="text-black/70 mb-6">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
