import React, { useEffect, useState } from "react";
import FlipMove from "react-flip-move";
import { RiderSelectedOrder } from "../components/Rider_selectedOrder";
import { useContext } from "react";
import { AppContext } from "../App";
import user from "../db/user.json";
import { Link } from "react-router-dom";

const { kakao } = window;

export const RiderDeliveryStatus = () => {
  const [finished, setFinished] = useState(false);
  const [toggle, setToggle] = useState({ index: null });
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [currentPosition, setCurrentPosition] = useState();
  const [remainingOrders, setRemainingOrders] = useState(
    user.rider[0].orderList.length
  );
  const { account, orderContract, order_c_address, orderID } =
    useContext(AppContext);

  const onClickFinish = async (i) => {
    setToggle({ index: null });
    try {
      await window.ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: account,
            to: order_c_address,
            data: orderContract.methods
              .doneDelivery(orderID)
              .encodeABI() /*주문번호*/,
            gas: "300000",
          },
        ],
      });
      setFinished({
        ...finished,
        [i]: true,
      });
      updateRemainingOrders();
      handleToast("배달을 완료하였습니다.");
    } catch (error) {
      console.error(error);
    }
  };

  const handleToast = (message) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 1950);
  };

  const onClickToggle = (i) => {
    setToggle({ index: i });
  };

  const onClickCancle = () => {
    setToggle({ index: null });
  };

  const updateRemainingOrders = () => {
    setRemainingOrders((prevRemainingOrders) => prevRemainingOrders - 1);
  };

  useEffect(() => {
    const getCurrentPosition = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          setCurrentPosition({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        });
      } else {
        alert("위치 정보를 사용할 수 없습니다.");
      }
    };

    getCurrentPosition();
  }, []);

  useEffect(() => {
    if (!currentPosition) return;

    kakao.maps.load(() => {
      const mapContainer = document.getElementById("map");
      const location = new kakao.maps.LatLng(
        currentPosition.lat,
        currentPosition.lng
      );
      const option = {
        center: location,
        level: 5,
      };
      const map = new kakao.maps.Map(mapContainer, option);
      const marker = new kakao.maps.Marker({ position: location });
      marker.setMap(map);
    });
  }, [currentPosition]);

  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-4">
        <div className="flex justify-center">
          <div className="border-[1px] px-2 rounded-lg max-w-[250px] border-darkGray whitespace-nowrap overflow-ellipsis overflow-hidden">
            {user.rider[0].deliveryArea}
          </div>
        </div>

        {toggle.index !== null && (
          <div className="flex justify-center items-center z-30">
            <div className="flex flex-col justify-between absolute w-72 h-44 py-4 mt-[520px] bg-white border-2 border-black solid-shadow px-4 rounded-2xl text-black">
              <div className="flex flex-col gap-2 justify-center items-center">
                <div className="font-bold text-headline">
                  배달을 완료했어요!
                </div>
                <div className="text-caption">고객님께 배달 완료를 알려요!</div>
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
                  onClick={() => onClickFinish(toggle.index)}
                >
                  완료
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="w-full h-[520px] relative overflow-hidden mt-6">
          <div
            id="map"
            className="absolute top-0 left-0 w-full h-full object-cover"
          ></div>
        </div>

        {showToast && (
          <div className="absolute mt-[500px] z-30 bg-white border-[1.5px] border-darkGray px-4 py-2 rounded-2xl font-bold fade-in-out">
            {toastMessage}
          </div>
        )}
      </div>

      {remainingOrders === 0 && (
        <div className="font-bold text-headline flex flex-col items-center mt-8">
          현재 배달 중인 목록이 없습니다.
          <Link to="/rider/newlist">
            <button className="bg-purple btn-style text-lightGray mt-8 regist-entry">
              배달 리스트 보러가기
            </button>
          </Link>
        </div>
      )}

      <FlipMove
        className="flex overflow-x-auto ml-5"
        duration={400}
        easing="ease-in-out"
        enterAnimation="elevatorHorizontal"
        leaveAnimation="elevatorHorizontal"
      >
        {user.rider[0].orderList.map((v, i) => {
          if (finished[i]) return null;
          return (
            <div className=" pt-5 pb-2 scrollbar-hide">
              <RiderSelectedOrder
                key={i}
                orderNum={v.id}
                stor_address={v.sto_address}
                cust_address={v.cust_address}
                time={v.time}
                distance={v.distance}
                onClickEvent={() => onClickToggle(i)}
              />
            </div>
          );
        })}
      </FlipMove>
    </div>
  );
};
