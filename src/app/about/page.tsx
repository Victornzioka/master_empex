import quotation_marks from "@/assets/quotation-marks.png";
import MeetTheTeam from "@/components/MeetTheTeam";
import Image from "next/image";

import { client, urlFor } from "@/lib/client";

export async function getAbout() {
  const data = await client.fetch(`*[_type == "about"]`);

  return {
    data,
  };
}

const About = async () => {
  const res = await getAbout();

  return (
    <div className="bg-gradient-to-b from-[#D2DCFF] to-[#fff] overflow-x-clip">
      <div className="container">
        <div className="section-heading mb-6 lg:mb-24">
          <div className="flex justify-center">
            <div className="tag">Who we are</div>
          </div>
          <h2 className="section-title mt-5">
            Your reliable logistics partner
          </h2>
          <p className="section-description mt-5">
            A dedicated team of logistics professionals committed to delivering
            excellence through innovation, reliability, and customer-focused
            solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="ml-10 h-52 p-4 lg:w-96 mt-6 mb-6">
            <Image
              src={quotation_marks}
              alt="quotation"
              height={20}
              className=""
            />
            <div className="border-b-2 h-5 w-10 border-blue-900"></div>
            <h2 className="text-[#f09f21] text-2xl font-bold italic mt-4 mb-10">
              "We believe it takes a great team to deliver great services."
            </h2>

            <p className="italic text-black/40">Unknown philosopher</p>
          </div>
          <div className="p-4 mb-10">
            <h1 className="text-[#f09f21] font-extrabold text-xl mb-4">
              OUR JOURNEY: DELIVERING EXCELLENCE IN LOGISTICS
            </h1>
            {res.data.map((aboutInfo) => (
              <p key={aboutInfo._type} className="text-black/40">
                {aboutInfo.about}
              </p>
            ))}
          </div>
        </div>
        <MeetTheTeam />
      </div>
    </div>
  );
};

export default About;
