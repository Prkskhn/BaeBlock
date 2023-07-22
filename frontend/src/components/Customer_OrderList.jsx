import { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";
import order from "../db/order.json";

const CustomerOrderList = (props) => {
  const { account, orderContract, order_c_address, orderID } =
    useContext(AppContext);
  const [state, setState] = useState("");

  const getOrderState = async () => {
    try {
      const response = await orderContract.methods
        .returnOrderState(orderID)
        .call();
      if (Number(response) === 0) {
        setState("주문 완료");
      } else if (Number(response) === 1) {
        setState("가게 수락");
      } else if (Number(response) === 2) {
        setState("가게 거절");
      } else if (Number(response) === 3) {
        setState("조리 완료");
      } else if (Number(response) === 4) {
        setState("배달 수락");
      } else if (Number(response) === 5) {
        setState("배달 중");
      } else if (Number(response) === 6) {
        setState("배달 완료");
      } else {
        setState("완료");
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getOrderState();
  });

  const onClickRiderCompleteAndPay = async () => {
    try {
      await window.ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: account,
            to: order_c_address,
            data: orderContract.methods
              .orderComplete(orderID, true)
              .encodeABI() /* 주문번호,true*/,
            gas: "100000",
          },
        ],
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="flex flex-col px-4 py-2 w-[360px] rounded-lg border-[1.5px] border-black solid-shadow">
      <div className="flex justify-between items-center">
        <div className="font-bold text-subtitle">{props.storeName}</div>
        {state === "배달 완료" ? (
          <button
            onClick={onClickRiderCompleteAndPay}
            className="text-white bg-purple
            px-2
            py-1
            rounded-xl"
          >
            {state}
          </button>
        ) : (
          <div className="text-purple font-bold rounded-xl">{state}</div>
        )}
      </div>
      {/* <div className="text-body font-bold mt-2">
        주문한 음식
        <div className="text-body font-thin">
          {order[0].orderMenu.map((v) => (
            <div className="flex justify-between">
              ▪ {v.foodname} <div>{v.quantity} 개</div>
            </div>
          ))}
        </div>
      </div> */}
      <div className="mt-2 flex justify-between text-body font-bold">
        <div>총 결제금액</div>
        <div className="ml-2">
          {(
            props.deliveryTip +
            props.foodPrice +
            props.deliveryFee
          ).toLocaleString()}{" "}
          원
        </div>
      </div>
    </div>
  );
};

export default CustomerOrderList;
