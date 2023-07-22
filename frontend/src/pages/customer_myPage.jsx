import { useContext } from "react";
import { AppContext } from "../App";
import CustomerOrderList from "../components/Customer_OrderList";
import User from "../db/user.json";

const CustomerMypage = () => {
  const { account } = useContext(AppContext);

  const calculateTotalCost = (i) => {
    const orderList = User.customer[i].orderList.wishList;
    let totalCost = 0;

    orderList.forEach((item) => {
      const { cost, quantity } = item;
      totalCost += cost * quantity;
    });

    return totalCost;
  };

  return (
    <div className="flex flex-col">
      <div className="bg-white w-[386px] h-14 absolute z-10"></div>
      <div className="flex justify-center pt-4">
        <div className="font-bold text-subtitle max-w-[250px] whitespace-nowrap overflow-ellipsis overflow-hidden absolute z-20">
          나의 주문 목록
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-14">
        {User.customer.map((v, i) => (
          <CustomerOrderList
            key={i}
            storeName={v.orderList.storeName}
            foodPrice={calculateTotalCost(i)}
            deliveryFee={v.orderList.deliveryFee}
            deliveryTip={v.orderList.deliveryTip}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomerMypage;
