import React from "react";
import { BsInstagram } from "react-icons/bs";
import { GrFacebookOption } from "react-icons/gr";
import { AiFillYoutube } from "react-icons/ai";

const Announcement = () => {
  return (
    <section className="bg-[#282828] py-2">
      <div className="max-w-[1320px] mx-auto flex justify-between items-center text-gray-400 text-sm px-3">
        <span>Sailing life</span>
        <div className="flex justify-between items-center gap-4">
          <GrFacebookOption size={18}/>
          <BsInstagram size={15}/>
          <AiFillYoutube size={18}/>
        </div>
      </div>
    </section>
  );
};

export default Announcement;
