import Image from "next/image";
import React from "react";

import avatar from "@/assets/avatar.jpg";

const MeetTheTeam = () => {
  return (
    <div className="bg-gradient-to-b from-[#D2DCFF] to-[#fff] overflow-x-clip">
      <div className="section-heading mb-6 lg:mb-24">
        <div className="flex justify-center">
          <div className="tag">Our Team</div>
        </div>
        <h2 className="section-title mt-5">Our team of Professionals</h2>
      </div>
      <div className="flex flex-col md:flex-row px-12 pb-12 items-center justify-center gap-14 md:gap-2 text-black/40">
        <div className="w-[200px] h-[200px] flex flex-col gap-4 justify-center items-center p-2 rounded-lg">
          <Image src={avatar} alt="avatar" />
          <div className="">
            <h2 className="font-bold">Mr. Micheal Mwale</h2>
            <p>Director of Operations</p>
          </div>
        </div>
        <div className="w-[200px] h-[200px] flex flex-col gap-4 justify-center items-center p-2 rounded-lg">
          <Image src={avatar} alt="avatar" />
          <div className="">
            <h2 className="font-bold">Morrison Naphas</h2>
            <p>Head of Operations</p>
          </div>
        </div>
        <div className="w-[200px] h-[200px] flex flex-col gap-4 justify-center items-center p-2 rounded-lg">
          <Image src={avatar} alt="avatar" />
          <div className="">
            <h2 className="font-bold">Lorna Mumaraki</h2>
            <p>Warehouse Manager</p>
          </div>
        </div>
        <div className="w-[200px] h-[200px] flex flex-col gap-4 justify-center items-center p-2 rounded-lg">
          <Image src={avatar} alt="avatar" />
          <div className="">
            <h2 className="font-bold">Trizer Lijondo</h2>
            <p>Head of Finance</p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default MeetTheTeam;
