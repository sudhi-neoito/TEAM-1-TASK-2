import React from "react";

export const Layout: React.FC = (props) => (
  <div className="bg-[#F5F5F5] w-[375px] h-[812px] mt-10 rounded-[30px] fixed ">
    {props.children}
  </div>
);
