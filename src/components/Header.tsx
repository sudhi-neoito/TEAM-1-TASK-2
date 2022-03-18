import React from "react";
import { Search } from "../assets";

const Header: React.FC = () => {
  return (
    <div className="mt-[42px] flex justify-between items-center font-poppins view-padding">
      <div className="flex flex-col items-start ">
        <label className="text-sm leading-[21px]">Hello,</label>
        <label className="text-[22px] font-semibold leading-[33px]">Philip Walter 👋 </label>
      </div>
      <Search />
    </div>
  );
};

export default Header;
