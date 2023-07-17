import { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";
import NftBox from "../components/NftBox";

const RiderMarket = () => {
  const {
    web3,
    account,
    orderContract,
    order_c_address,
    riderNftContract,
    rider_c_address,
  } = useContext(AppContext);
  const [nftDay, setNftDay] = useState(0);
  const [nftTime, setNftTime] = useState(0);
  const [nowTime, setNowTime] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  const onClickMint = async () => {
    if (nftTime === 0) {
      try {
        var a = web3.utils.numberToHex(Number(1)); /*nft가격*/
        await window.ethereum.request({
          method: "eth_sendTransaction",
          params: [
            {
              from: account,
              to: rider_c_address,
              data: riderNftContract.methods
                .DeliveryMint(1)
                .encodeABI() /*민팅개수*/,
              gas: "100000",
              value: a,
            },
          ],
        });
        setTimeout(getNftTime, 15000);
      } catch (error) {
        console.error(error);
      }
    } else {
      setShowPopup(true);
      console.log("x");
    }
  };

  const onClickBurn = async () => {
    if (nftTime === 0) {
      try {
        await window.ethereum.request({
          method: "eth_sendTransaction",
          params: [
            {
              from: account,
              to: order_c_address,
              data: orderContract.methods.burnRiderNft().encodeABI(),
              gas: "100000",
            },
          ],
        });
      } catch (error) {
        console.error(error);
      }
    } else {
      setShowPopup(true);
      console.log("x");
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const getNftTime = async () => {
    try {
      const nftTime = await window.ethereum.request({
        method: "eth_call",
        params: [
          {
            from: account,
            to: order_c_address,
            data: orderContract.methods.getRiderNftTime().encodeABI(),
          },
        ],
      });
      setNftTime(parseInt(nftTime));
      const nftTimeValue = parseInt(nftTime);
      setNftTime(nftTimeValue);
      const nowTime = await orderContract.methods.getBlockTimeStamp().call();
      setNowTime(parseInt(nowTime));
      const calculateTime = (
        (nftTimeValue - parseInt(nowTime)) /
        86400
      ).toFixed(0);
      setNftDay(calculateTime);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getNftTime();
  }, []);
  getNftTime();
  useEffect(() => {
    const time = ((nftTime - nowTime) / 86400).toFixed(0);
    setNftDay(time);
    console.log(nftTime);
  }, [nftTime]);

  return (
    <div className="mt-20 flex flex-col justify-center items-center ">
      <div>NFT 만료까지 남은 기간</div>

      <div
        className="mt-6 mb-4 font-bold text-3xl"
        style={{ fontSize: "80px" }}
      >
        {nftTime > 0 ? <div>{nftDay}일 </div> : 0}
      </div>
      <div className="h-16"></div>

      <button onClick={onClickBurn}>
        <NftBox
          color="bg-deepYellow"
          title="만료된 NFT를 폐기해요!"
          detail1="기존에 보유하신 만료된 nft를 폐기합니다!"
          detail2=""
        />
      </button>

      <div className="h-4"></div>

      <button onClick={onClickMint}>
        <NftBox
          color="bg-purple"
          fontColor="text-lightGray"
          title="새로운 NFT를 구매해요!"
          detail1="만료된 nft를폐기한 이후 구매해주세요!"
          detail2="구매 혜택: 60일 배달 권한 부여"
        />
      </button>

      {showPopup && (
        <div
          className="popup flex justify-center items-center"
          onClick={closePopup}
        >
          <div
            className="flex flex-col justify-around items-center absolute w-72 h-44 py-4 mt-[-400px] bg-white border-2 border-black solid-shadow px-4 rounded-2xl text-black"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="font-bold text-headline text-center">
              사용 기한이 남아있어요!
            </div>
            <button
              className="bg-lightYellow w-20 p-2 rounded-xl font-bold border-[1.5px] border-black mt-4"
              onClick={closePopup}
            >
              확인
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RiderMarket;
