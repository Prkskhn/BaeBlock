import { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";
import NftBox from "../components/NftBox";

const StoreMarket = () => {
  const {
    web3,
    account,
    orderContract,
    order_c_address,
    storeNftContract,
    store_c_address,
  } = useContext(AppContext);
  const [nftDay, setNftDay] = useState(0);
  const [nftTime, setNftTime] = useState(0);
  const [nowTime, setNowTime] = useState(0);
  const [firstMint, setFirstMint] = useState(0);
  const onClickMint = async () => {
    try {
      const firstMinting = await storeNftContract.methods
        .firstMinting(account)
        .call();

      if (firstMinting < 1) {
        setFirstMint(0);
      } else {
        setFirstMint(3); /*nft가격*/
      }

      await window.ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: account,
            to: store_c_address,
            data: storeNftContract.methods.storeMint().encodeABI() /*민팅개수*/,
            gas: "100000",
            value: web3.utils.numberToHex(Number(firstMint)),
          },
        ],
      });
      setTimeout(getNftTime, 15000);
    } catch (error) {
      console.error(error);
    }
  };
  const onClickBurn = async () => {
    try {
      await window.ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: account,
            to: order_c_address,
            data: orderContract.methods
              .burnStoreNft()
              .encodeABI() /*order컨트랙트에 burn만들기 */,
            gas: "100000",
          },
        ],
      });
    } catch (error) {
      console.error(error);
    }
  };
  const getNftTime = async () => {
    try {
      const nftTime = await window.ethereum.request({
        method: "eth_call",
        params: [
          {
            from: account,
            to: order_c_address,
            data: orderContract.methods.getStoreNftTime().encodeABI(),
          },
        ],
      });
      setNftTime(parseInt(nftTime));
      const nowTime = await orderContract.methods.getBlockTimeStamp().call();
      setNowTime(parseInt(nowTime));
      const calculateTime = (
        (parseInt(nftTime) - parseInt(nowTime)) /
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
    //setNftDay(((nftTime - nowTime) / 86400).toFixed(0));
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
          detail1="만료된 nft를 폐기한 이후 구매해주세요!"
          detail2="구매 혜택: 30일 판매 수수료 면제"
        />
      </button>
    </div>
  );
};

export default StoreMarket;
