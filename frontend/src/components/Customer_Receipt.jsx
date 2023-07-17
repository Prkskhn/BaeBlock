import React from "react";
import order from "../db/order.json";
import barCode from "../images/barCode.png";

export const CustomerReceipt = ({ foodTotal, exchangeRate }) => {
  // Rider_orderList에서 선택한 애들의 정보가 여기에 떠야함.

  return (
    <div className="w-[340px] h-[340px] px-5 py-4">
      <div className="flex justify-between border-darkGray border-dashed border-b-[1px] pb-2 text-body font-bold">
        주문번호 <div className="font-thin">#{order[0].OrderID}</div>
      </div>
      <div className="flex flex-col mt-4">
        <div className="flex flex-col gap-0.5">
          <div className="flex justify-between">
            <div className="text-body font-bold">배달 주소</div>
            <div className="text-body">{order[0].cus_address}</div>
          </div>
          <div className="flex justify-between border-darkGray border-dashed border-b-[1px] pb-4">
            <div className="text-body font-bold">가게 이름</div>
            <div className="text-body">{order[0].storeName}</div>
          </div>
        </div>
        <div className="text-body font-bold mt-4 border-darkGray border-dashed border-b-[1px] pb-4">
          주문한 음식
          <div className="mt-2 text-body font-thin">
            {order[0].orderMenu.map((v, i) => (
              <div className="flex justify-between" key={i}>
                ▪ {v.foodname} <div>{v.quantity} 개</div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col mt-4 text-body font-bold gap-0.5">
          <div className="flex justify-between">
            음식 가격
            <div className="font-normal">
              {order[0].orderMenu
                .reduce((sum, v) => {
                  return sum + v.price;
                }, 0)
                .toLocaleString()}{" "}
              원
            </div>
          </div>
          <div className="flex justify-between">
            배달비
            <div className="font-normal">
              {order[0].deliveryFee.toLocaleString()} 원
            </div>
          </div>
          <div className="flex justify-between border-darkGray border-dashed border-b-[1px] pb-4">
            배달팁
            <div className="font-normal">
              {order[0].deliveryTip.toLocaleString()} 원
            </div>
          </div>
          <div className="flex justify-between border-darkGray border-dashed border-b-[1px] mt-4 pb-4">
            총 결제금액
            <div className="font-normal">
              {(
                (foodTotal + order[0].deliveryFee + order[0].deliveryTip) /
                exchangeRate
              ).toFixed(3)}{" "}
              원
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <img className="my-4 w-[200px]" src={barCode} alt="바코드" />
        </div>
      </div>
    </div>
  );
};
