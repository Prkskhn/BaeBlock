import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";
import { CustomerReceipt } from "../components/Customer_Receipt";

function CustomerOrderComplete() {
  const { Acustomer, exchangeRate, account, orderContract } =
    useContext(AppContext);
  const calculateTotalCost = () => {
    let totalCost = 0;

    Acustomer.wishList.forEach((item) => {
      const { cost, quantity } = item;
      totalCost += cost * quantity;
    });
    return totalCost;
  };

  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="w-[350px] mt-[8px] border-[1px] border-darkGray "></div>
        <div className="flex flex-col items-center gap-6 mt-16">
          <div className="font-bold text-3xl">주문 접수 완료!</div>
          <div className="flex flex-col justify-center items-center font-bold text-subtitle">
            <div>라이더와 매장이 주문을 수락하면</div>
            <div>차례대로 알려드릴게요!</div>
          </div>
          <div className="text-caption">
            라이더와 매장의 사정으로 취소될 수 있어요.
          </div>
        </div>

        <div className="w-[340px] h-[340px] overflow-y-auto scrollbar-hide my-8 border-[1px] rounded-3xl border-darkGray">
          <div className="flex">
            <CustomerReceipt
              foodTotal={calculateTotalCost()}
              exchangeRate={exchangeRate}
            />
          </div>
        </div>
        <div className="flex flex-col items-center mt-4">
          <Link to="/customer/mypage">
            <button className="bg-purple btn-style text-lightGray">
              주문 내역 보기
            </button>
          </Link>
          <Link to="/customer/main">
            <div className="text-purple text-body mt-4">
              다른 메뉴도 구경할래!
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CustomerOrderComplete;
