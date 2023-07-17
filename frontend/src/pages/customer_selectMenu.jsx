import user from '../db/user.json';
import { useState, useContext } from 'react';
import { AppContext } from '../App';
import { CustomerMenuDetail } from '../components/Customer_menuDetail';
import { Link, useParams } from 'react-router-dom';

function CustomerSelectMenu() {
  const { storeId, menuId } = useParams();
  const [counter, setCounter] = useState(1);
  const menuDetail = user.store[Number(storeId)].menu[Number(menuId)];
  const { cartCount, setCartCount } = useContext(AppContext);
  const onClickAddCart = () => {
    setCartCount(cartCount + counter);
  };
  const onClickAdd = () => {
    setCounter(counter + 1);
  };
  const onClickSub = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className='flex flex-col'>
      <div className='min-w-full h-[250px]'>
        <img
          className='w-full h-full object-cover'
          src={`${user.store[storeId].menu[menuId].menuImage}`}
          alt='food'
        />
      </div>

      <div className='flex justify-between items-center mx-6 mt-4 mb-6'>
        <div className='font-bold text-headline'>{menuDetail.name}</div>
        <div className='font-bold text-body'>{menuDetail.price.toLocaleString()}원</div>
      </div>

      {menuDetail.detail.map((v, i) => (
        <CustomerMenuDetail key={i} menuId={i} title={v.title} options={v.options} />
      ))}

      <div className='flex justify-between items-center mx-6 mb-8'>
        <div className='font-bold text-body'>수량</div>
        <div className='w-24 h-7 flex justify-between items-center gap-4 font-bold border-[1.5px] border-gray rounded-full px-3'>
          <div className={`${counter === 1 ? 'text-gray' : 'text-black'}`} onClick={onClickSub}>
            -
          </div>
          <div>{counter}</div>
          <div onClick={onClickAdd}>+</div>
        </div>
      </div>

      <div className='sticky bottom-0 bg-white rounded-b-2xl w-[386px] flex justify-between items-center px-4 py-4 border-t-2 border-lightGray'>
        <div className='font-bold text-body'>
          총 : {(menuDetail.price * counter).toLocaleString()} 원
        </div>
        <Link to={`/customer/viewmenu/${storeId}`}>
          <button
            className='text-subtitle font-bold bg-lightYellow rounded-xl px-6 py-2'
            onClick={onClickAddCart}>
            카트에 담기
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CustomerSelectMenu;
