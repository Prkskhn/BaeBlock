import React, { createContext, useEffect, useRef, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import axios from "axios";

import user from "./db/user.json";

import LoginSelect from "./pages/login_select";
import { Header } from "./components/Header";
import BtnNav from "./components/BtnNav";

import CustomerViewMenu from "./pages/customer_viewMenu";
import CustomerOrderComplete from "./pages/customer_orderComplete";
import { CustomerRegistDetail } from "./pages/customer_registDetail";
import { CustomerMain } from "./pages/customer_main";
import { CustomerPayment } from "./pages/customer_payment";
import { CustomerRegist } from "./pages/customer_regist";
import { CustomerSignIn } from "./pages/customer_signIn";
import CustomerSelectMenu from "./pages/customer_selectMenu";

import StoreMain from "./pages/store_main";
import StoreMenu from "./pages/store_menu";
import { StoreNewList } from "./pages/store_newList";
import { StoreMyList } from "./pages/store_myList";
import StoreMenuEdit from "./pages/store_menuEdit";
import { StoreSignIn } from "./pages/store_signIn";
import { StoreRegist } from "./pages/store_regist";
import { StoreRegistDetail } from "./pages/store_registDetail";
import StoreMarket from "./pages/store_market";

import RiderMain from "./pages/rider_main";
import { RiderNewList } from "./pages/rider_newList";
import { RiderDeliveryStatus } from "./pages/rider_deliveryStatus";
import { RiderSignIn } from "./pages/rider_signIn";
import { RiderRegist } from "./pages/rider_regist";
import { RiderRegistDetail } from "./pages/rider_registDetail";
import RiderMarket from "./pages/rider_market";

import ORDER_C_ABI from "./contracts/order_c_abi.json";
import RIDER_C_ABI from "./contracts/rider_c_abi.json";
import STORE_C_ABI from "./contracts/store_c_abi.json";
import Web3 from "web3";

import CustomerMypage from "./pages/customer_myPage";

export const AppContext = createContext();

function App() {
  const [account, setAccount] = useState();
  const [exchangeRate, setExchangeRate] = useState(0);
  const [Astore, setAStore] = useState(user.store[0]);
  const [Acustomer, setACustomer] = useState(user.customer[0].orderList);
  const [cartCount, setCartCount] = useState(0);
  const [orderID, setOrderID] = useState(0);

  const onClickAccount = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      setAccount(accounts[0]);
      const response = await orderContract.methods.returnOrderID().call();
      setTimeout(setOrderID(Number(response)), 1000);
    } catch (error) {
      console.error(error);

      alert("계정 정보를 불러오는데 실패하였습니다.");
    }
  };

  var web3 = new Web3(process.env.REACT_APP_API);
  var order_c_address = "0x45160732c419D7cb9a7Dfc06AcAfcec38857469c";
  var rider_c_address = "0xd69b0fcbF85BDA6C7F43e14da636E03F4b02D3e9";
  var store_c_address = "0x727099C7cf9f40d3897427Cad0f1651021390f4A";
  var order_c_abi = ORDER_C_ABI;
  var rider_c_abi = RIDER_C_ABI;
  var store_c_abi = STORE_C_ABI;
  var orderContract = new web3.eth.Contract(order_c_abi, order_c_address);
  var riderNftContract = new web3.eth.Contract(rider_c_abi, rider_c_address);
  var storeNftContract = new web3.eth.Contract(store_c_abi, store_c_address);

  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = scrollRef.current.scrollTop;
      setScrollPosition(currentScrollY);
      // console.log('Current scroll position:', currentScrollY);
    };
    if (scrollRef.current) {
      scrollRef.current.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const getStoreData = async () => {
    try {
      user.store.forEach((store) => {
        if (store.wallet.toLowerCase() === account) {
          setAStore(store);
        }
      });
    } catch (error) {
      console.error("Error fetching store data:", error);
    }
  };

  const getExchangeRate = async () => {
    try {
      const response = await axios.get(
        `https://api.upbit.com/v1/ticker?markets= KRW-MATIC`
      );
      setExchangeRate(response.data[0].trade_price);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getExchangeRate();
    getStoreData();
  }, []);

  return (
    <BrowserRouter>
      <div className="min-h-screen flex justify-center items-center noDrag">
        <div
          className="bg-white border-2 rounded-2xl border-black w-screen h-screen max-w-screen-width max-h-[844px] mx-auto overflow-y-auto text-black scrollbar-hide"
          ref={scrollRef}
        >
          <Header />

          <AppContext.Provider
            value={{
              web3,
              setAccount,
              account,
              orderContract,
              riderNftContract,
              storeNftContract,
              order_c_address,
              rider_c_address,
              store_c_address,

              Astore,
              exchangeRate,
              getExchangeRate,
              Acustomer,
              setACustomer,
              cartCount,
              setCartCount,
              orderID,
              setOrderID,
            }}
          >
            <BtnNav
              account={account}
              onClickAccount={onClickAccount}
              scrollPosition={scrollPosition}
            />
            <Routes>
              <Route path="/" element={<LoginSelect />} />

              <Route path="/customer/signin" element={<CustomerSignIn />} />
              <Route path="/customer/regist" element={<CustomerRegist />} />
              <Route
                path="/customer/regist/detail"
                element={<CustomerRegistDetail />}
              />
              <Route path="/customer/main" element={<CustomerMain />} />
              <Route
                path="/customer/viewmenu/:storeId"
                element={<CustomerViewMenu />}
              />
              <Route
                path="/customer/viewmenu/:storeId/:menuId"
                element={<CustomerSelectMenu />}
              />
              <Route path="/customer/payment" element={<CustomerPayment />} />
              <Route
                path="/customer/ordercomplete"
                element={<CustomerOrderComplete />}
              />

              <Route path="/customer/mypage" element={<CustomerMypage />} />

              <Route path="/store/signin" element={<StoreSignIn />} />
              <Route path="/store/regist" element={<StoreRegist />} />
              <Route
                path="/store/regist/detail"
                element={<StoreRegistDetail />}
              />
              <Route path="/store/main" element={<StoreMain />} />
              <Route path="/store/newlist" element={<StoreNewList />} />
              <Route path="/store/mylist" element={<StoreMyList />} />
              <Route path="/store/edit" element={<StoreMenu />} />
              <Route path="/store/edit/menu" element={<StoreMenuEdit />} />
              <Route path="/store/nftmarket" element={<StoreMarket />} />

              <Route path="/rider/signin" element={<RiderSignIn />} />
              <Route path="/rider/regist" element={<RiderRegist />} />
              <Route
                path="/rider/regist/detail"
                element={<RiderRegistDetail />}
              />
              <Route path="/rider/main" element={<RiderMain />} />
              <Route path="/rider/delivery" element={<RiderDeliveryStatus />} />
              <Route path="/rider/newlist" element={<RiderNewList />} />
              <Route path="/rider/nftmarket" element={<RiderMarket />} />
            </Routes>
          </AppContext.Provider>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
