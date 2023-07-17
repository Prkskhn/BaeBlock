import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import MMLogo from "../images/logo_metaMask.png";
import Logo from "../images/BBLogoLightGradient.png";
import { AppContext } from "../App";

export const StoreRegist = () => {
  const navigate = useNavigate();
  const {
    web3,
    account,
    setAccount,
    orderContract,
    order_c_address,
    storeNftContract,
    store_c_address,
  } = useContext(AppContext);
  const [firstMint, setFirstMint] = useState(0);
  const onClickStore = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccount(accounts[0]);
      await window.ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: account,
            to: order_c_address,
            data: orderContract.methods.Register(1).encodeABI(),
          },
        ],
      });
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

      navigate("/store/regist/detail", {
        replace: true,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center mt-24">
      <div className="font-bold text-[24px]">
        메타마스크로 간편하게 가입해요.
      </div>
      <div className="regist-entry">
        <div className="flex flex-col justify-center items-center gap-1 mt-8">
          <div className="text-body">
            배불럭은 이더리움의 스마트 컨트랙트를 활용한
          </div>
          <div className="text-body">새로운 배달앱 입니다!</div>
          <div className="text-body">
            사장님은{" "}
            <span className="font-bold text-purple">
              저렴한 수수료로 즐겁게
            </span>{" "}
            요리해요!
          </div>
        </div>
        <div className="flex justify-center font-bold text-subtitle mt-16">
          <span className="font-bold text-purple">여우를 눌러 가입</span>
          해보세요!
        </div>
      </div>

      <button onClick={onClickStore}>
        <img
          className={`w-48 mt-4 transform scale-100 transition duration-300 ease-in-out hover:scale-110`}
          src={MMLogo}
          alt="MetaMask"
        />
      </button>

      <div className="text-caption text-darkGray mt-32">이용약관</div>
      <img className="w-20 mt-8" src={Logo} alt="Logo" />
    </div>
  );
};
