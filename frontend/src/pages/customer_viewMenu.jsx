import user from '../db/user.json';
import MenuList from '../components/MenuList';
import CartIcon from '../components/CartIcon';
import BottomBar from '../components/Customer_BottomNav';
import StoreIntro from '../components/Store_Intro';
import { useEffect, useState } from 'react';
import { DeliveryFeeChip } from '../components/DeliveryFeeChip';

import { useParams } from 'react-router-dom';

export default function CustomerViewMenu({ scrollPosition }) {
  // const [deliveryFee, setDeliveryFee] = useState(1000);
  const [cartCount, setCartCount] = useState(0); //로그인시 프롭스로 내려줘야함??

  const { storeId } = useParams();
  const store = user.store[Number(storeId)];

  useEffect(() => {
    scrollPosition = 0;
  }, []);

  useEffect(() => {
    console.log(typeof storeId);
  }, []);

  return (
    <div className='flex flex-col justify-start items-center z-20'>
      <div className='min-w-full h-[250px]'>
        <img className='w-full h-full object-cover' src={store.menu[0].menuImage} alt='food' />
        <div className='relative'>
          <div className='absolute left-8 -top-24 flex flex-col justify-center items-center'>
            <div className='flex flex-col'>
              <DeliveryFeeChip deliveryFee={store.deliveryFee.toLocaleString()} />
              <StoreIntro storeName={store.storeName} nftTitle={store.nft} starCount='5' />
            </div>
          </div>
        </div>
      </div>

      <div className='mt-28'>
        <div className='text-subtitle font-bold text-left mb-2 ml-1'>메뉴</div>
        <div className='flex flex-col gap-4 mb-16'>
          {store.menu.map((v, i) => (
            <MenuList
              key={i}
              menuId={i}
              name={store.menu[i].name}
              caption={store.menu[i].caption}
              price={store.menu[i].price.toLocaleString()}
              menuImage={store.menu[i].menuImage}
              isRecommend={store.menu[i].recommend}
            />
          ))}
        </div>
      </div>

      <div className='sticky bottom-0'>
        <div className='absolute right-2 bottom-16'>
          <CartIcon cartMenuCount={cartCount} />
        </div>
        <BottomBar />
      </div>
    </div>
  );
}
