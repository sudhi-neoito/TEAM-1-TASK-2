import React from "react";
import { Cube } from "../assets";
import Card from "./Card";

const HorizotalScrollView: React.FC = () => {
  return (
    <div
      className="mt-[19.1px]  flex overflow-x-auto space-x-5 w-full px-4  hide-scroll  snap-x snap-mandatory 
    ">
      {[...Array(5)].map((_, index) => (
        <Card />
      ))}
    </div>
  );
};

export default HorizotalScrollView;
