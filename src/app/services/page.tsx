import ects from "@/assets/ects.png";
import temperature_truck from "@/assets/temperature-controlled-trucks.png";
import Image from "next/image";

const Services = () => {
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
          <div className="">
            <Image
              src={ects}
              alt="tracking system"
              className="bg-white p-4 h-[250px]"
            />
            <div>
              <h1 className="font-bold mb-3 mt-3">Cement Transportation</h1>
              <p className="text-black/70 mb-6">
                This is a technology that enables real-time tracking of cargo
                from the point of loading to the point of offloading. This
                ensures safety of cargo while in transit.
              </p>
            </div>
          </div>
          <div className="">
            <Image
              src={temperature_truck}
              alt="tracking system"
              className="bg-white p-4 h-[250px]"
            />
            <div>
              <h1 className="font-bold mb-3 mt-3">Bulk grain transportation</h1>
              <p className="text-black/70 mb-6">
                This is a technology that enables real-time tracking of cargo
                from the point of loading to the point of offloading
              </p>
            </div>
          </div>
          <div className="">
            <Image
              src={ects}
              alt="tracking system"
              className="bg-white p-4 h-[250px]"
            />
            <div>
              <h1 className="font-bold mb-3 mt-3">
                Construction Material transportation
              </h1>
              <p className="text-black/70 mb-6">
                This is a technology that enables real-time tracking of cargo
                from the point of loading to the point of offloading
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="">
            <Image
              src={ects}
              alt="tracking system"
              className="bg-white p-4 h-[250px]"
            />
            <div>
              <h1 className="font-bold mb-3 mt-3">Petroleum Transport</h1>
              <p className="text-black/70 mb-6">
                This is a technology that enables real-time tracking of cargo
                from the point of loading to the point of offloading. This
                ensures safety of cargo while in transit.
              </p>
            </div>
          </div>
          <div className="">
            <Image
              src={temperature_truck}
              alt="tracking system"
              className="bg-white p-4 h-[250px]"
            />
            <div>
              <h1 className="font-bold mb-3 mt-3">Specialized Haulage</h1>
              <p className="text-black/70 mb-6">
                This is a technology that enables real-time tracking of cargo
                from the point of loading to the point of offloading
              </p>
            </div>
          </div>
          <div className="">
            <Image
              src={ects}
              alt="tracking system"
              className="bg-white p-4 h-[250px]"
            />
            <div>
              <h1 className="font-bold mb-3 mt-3">Equipment Leasing</h1>
              <p className="text-black/70 mb-6">
                This is a technology that enables real-time tracking of cargo
                from the point of loading to the point of offloading
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
