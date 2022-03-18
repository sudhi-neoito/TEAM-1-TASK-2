import React from "react";
import { task } from "../common/task";
import TaskCard from "./TaskCard";

const VerticalScrollVew: React.FC = () => {
  return (
    <div className="view-padding mt-1 flex flex-col fixed  h-[490px] hide-scroll  overflow-y-auto  w-full ">
      <div className="z-50 font-poppins text-lg w-[337.13px] fixed h-[55.92px] bg-normal-gradient">
        <label className="font-normal pr-1">In</label>
        <label className="font-semibold">Progress</label>
      </div>
      <div className="pt-[20px] space-y-[0.625rem]">
        <div className="z-40 w-[360px] h-[32.55px] bg-normal-gradient fixed -ml-[20px]"></div>
        {task.map((data, index) => (
          <TaskCard key={index} data={data} />
        ))}
      </div>
    </div>
  );
};

export default VerticalScrollVew;
