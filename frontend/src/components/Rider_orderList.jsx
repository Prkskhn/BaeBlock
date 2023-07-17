import { useContext, useState } from "react";
import FlipMove from "react-flip-move";
import { AppContext } from "../App";

export const RiderOrderList = ({ orders, setSelectDelivery, activeBtn }) => {
  const { account, orderContract, order_c_address, orderID } =
    useContext(AppContext);
  const [selected, setSelected] = useState({});
  const [toggle, setToggle] = useState({ index: null });

  const onClickSetDelivery = async (i) => {
    try {
      setToggle({ index: null });
      await window.ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: account,
            to: order_c_address,
            data: orderContract.methods.setDelivery(orderID).encodeABI(),
            gas: "300000",
          },
        ],
      });
      setSelectDelivery(i + 1);
      setSelected({
        ...selected,
        [i]: true,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const onClickToggle = (i) => {
    setToggle({ index: i });
  };

  const onClickCancle = () => {
    setToggle({ index: null });
  };

  return (
    <div className="flex flex-col ">
      {toggle.index !== null && (
        <div className="flex justify-center items-center">
          <div className="flex flex-col justify-between absolute z-10 w-72 h-44 py-4 mt-[350px] bg-white border-2 border-black solid-shadow px-4 rounded-2xl text-black">
            <div className="flex flex-col gap-2 justify-center items-center">
              <div className="font-bold text-headline">주문을 선택할까요?</div>
              <div className="text-caption">해당 주문을 선택해요!</div>
            </div>
            <div className="flex justify-center gap-8">
              <button
                className="bg-lightGray w-20 p-2 rounded-xl font-bold border-[1.5px] border-black"
                onClick={onClickCancle}
              >
                닫기
              </button>
              <button
                className="bg-lightYellow w-20 p-2 rounded-xl font-bold border-[1.5px] border-black"
                onClick={() => onClickSetDelivery(toggle.index)}
              >
                선택
              </button>
            </div>
          </div>
        </div>
      )}

      <FlipMove
        className="flex flex-col justify-center"
        duration={400}
        easing="ease-in-out"
        enterAnimation="elevator"
        leaveAnimation="elevator"
      >
        {orders.map((order, i) => {
          if (selected[i]) return null;
          return (
            <button
              key={order.id}
              className="bg-white w-[350px] mb-3 rounded-lg border-[1.5px] border-darkGray solid-shadow hover:border-2 hover:border-black"
              onClick={() => onClickToggle(i)}
            >
              <div className="px-4 py-2">
                <div className="flex justify-between">
                  <div className="font-bold">15분</div>
                  <div
                    className={` ${
                      activeBtn === "fee"
                        ? "text-purple font-bold"
                        : "text-black"
                    } `}
                  >
                    {(
                      order.deliveryFee * 2 +
                      order.deliveryTip
                    ).toLocaleString()}
                    원
                  </div>
                </div>
                <div className="text-caption">
                  <div className="flex justify-between mb-2">
                    {order.storeName}
                    <span
                      className={` ${
                        activeBtn === "dist"
                          ? "text-purple font-bold"
                          : "text-black"
                      } ml-8`}
                    >
                      {order.distance} km
                    </span>
                  </div>
                  <div className="flex">고객 위치: {order.cus_address}</div>
                  {/* <div className='flex'>매장 위치: {order.sto_address}</div> */}
                </div>
              </div>
            </button>
          );
        })}
      </FlipMove>
    </div>
  );
};
