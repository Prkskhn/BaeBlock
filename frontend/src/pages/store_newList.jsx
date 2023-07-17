import React from "react";
import { StoreOrderList } from "../components/Store_orderList";

export const StoreNewList = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-white w-[386px] h-14 absolute z-10"></div>
      <div className="flex justify-center pt-4">
        <div className="font-bold text-subtitle max-w-[250px] whitespace-nowrap overflow-ellipsis overflow-hidden absolute z-20">
          새로운 주문
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-14">
        <StoreOrderList />
      </div>
    </div>
  );
};
