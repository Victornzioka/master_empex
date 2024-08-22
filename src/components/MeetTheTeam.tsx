import Image from "next/image";
import React from "react";

import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar1 from "@/assets/avatar-1.png";

const MeetTheTeam = () => {
  return (
    <div className="bg-gradient-to-b from-[#D2DCFF] to-[#fff] overflow-x-clip">
      <div className="section-heading mb-6 lg:mb-24">
        <div className="flex justify-center">
          <div className="tag">Our Team</div>
        </div>
        <h2 className="section-title mt-5">Our team of Professionals</h2>
      </div>
      <div className="flex px-12 pb-12 items-center justify-center gap-6 text-black/40">
        <div className="">
          <Image src={avatar6} alt="avatar" />
          <div className="">
            <h2>Lorna Mumaraki</h2>
            <p>Warehouse Manager</p>
          </div>
        </div>
        <div className="">
          <Image src={avatar1} alt="avatar" />
          <div className="">
            <h2>Sheila Korir</h2>
            <p>Warehouse Manager</p>
          </div>
        </div>
        <div className="">
          <Image src={avatar7} alt="avatar" />
          <div className="">
            <h2>Morris Morris</h2>
            <p>Warehouse Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetTheTeam;
