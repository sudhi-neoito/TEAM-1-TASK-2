import React from "react";
import { Cube } from "../assets";

const Card: React.FC = () => {
  return (
    <div className="relative snap-center">
      <div className="w-[319px] h-[172px] bg-card-gradient rounded-[30px] absolute pt-[34px] pl-[28px] text-white font-poppins flex flex-row z-20 ">
        <div>
          <h3 className="text-sm leading-7 font-normal">You've got</h3>
          <h2 className="text-[22px] leading-7 font-semibold">11 task today</h2>
          <div className="w-[130px] h-[38px] bg-[#8299FF] rounded-[50px] flex justify-center items-center text-sm leading-7 font-medium mt-[15.5px]">
            View Details
          </div>
        </div>
        <div className="absolute  left-[150px] top-[12.6px]">
          <Cube className="mix-blend-screen" />
        </div>
      </div>
      <div className="w-[327px] h-[172px] bg-[#E2E2F5] rounded-[30px] transform rotate-[3.88deg]"></div>
    </div>
  );
};

export default Card;
