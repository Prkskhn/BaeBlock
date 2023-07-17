import { Link } from "react-router-dom";
import ShopCart from "../images/shoppingCart.png";
import { useContext } from "react";
import { AppContext } from "../App";
const CartIcon = () => {
  const { cartCount } = useContext(AppContext);
  return (
    <Link to="/customer/payment">
      <div className="flex justify-end">
        <div className="relative">
          <img className="w-[90px] h-auto" src={ShopCart} alt="" />
          <div className="absolute bottom-3 right-4 font-bold text-body text-lightYellow">
            {cartCount}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CartIcon;
