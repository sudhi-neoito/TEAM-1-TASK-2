import React from "react";
import { Task } from "../common/task";

const TaskCard: React.FC<{ data: Task }> = ({ data }) => {
  return (
    <div
      className="w-[319px] h-[130px] bg-white 
  rounded-[12px]
  pl-[21px] pr-[18px] pt-[23px] pb-6 shadow-[0_1px_12px_rgba(0, 0, 0, 0.05)]
  space-y-2 font-inter
  ">
      <div className="flex flex-row items-center space-x-3 justify-start">
        <span className="font-semibold text-lg leading-7 not-italic text-[#17181A]">
          {data.title}
        </span>
        <div className=" w-[60px] h-[23px] bg-[#FF7246] rounded-md text-white text-[12px] flex justify-center items-center leading-[18px]">
          {data.tasks} Task
        </div>
      </div>
      <div className="font-normal leading-5 text-[14px] text-[#797C80]">{data.description}</div>
      <div className="flex space-x-[7px] justify-start items-center  ">
        <div className="flex -space-x-2  flex-row">
          {data?.User?.map((user, index) => (
            <div
              className={`flex w-6 h-6 rounded-full border border-solid border-[#FFFFFF] overflow-hidden  justify=center items-center relative `}>
              <img
                src={user.imageUrl}
                key={index}
                className={`object-cover w-6 h-6 z-${index + 1}0`}
              />
            </div>
          ))}
        </div>
        <span className="text-[#666666] text-[14px] leading-5 font-normal">
          {data.User?.length} Participants
        </span>
      </div>
    </div>
  );
};

export default TaskCard;
