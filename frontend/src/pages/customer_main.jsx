import { BiSolidDownArrow } from 'react-icons/bi';
import { BsSearch } from 'react-icons/bs';

import CartIcon from '../components/CartIcon';
import BottomBar from '../components/Customer_BottomNav';
import { CategoryCard } from '../components/CategoryCard';
import { LatestOrderCard } from '../components/LatestOrderCard';
import { MatZipCard } from '../components/MatZipCard';

import moneyBag from '../images/icon_moneyBag.png';
import Korean from '../images/korean.png';
import Hamburger from '../images/hamburger.png';
import Chinese from '../images/chinese.png';
import Japanese from '../images/japanese.png';
import user from '../db/user.json';

export const CustomerMain = () => {
  return (
    <div className='bg-[#F8F8F8]'>
      <div className='bg-white w-[386px] h-14 absolute z-10'></div>
      <div className='flex flex-col justify-between items-center pt-4'>
        <div className='flex gap-3 justify-between items-center absolute z-30'>
          <div className='text-caption'>{user.customer[0].cus_address}</div>
          <BiSolidDownArrow size={12} />
        </div>
        <div className='w-[250px] border-b-[1.5px] pt-6 border-purple absolute z-20'></div>
      </div>

      <div className='flex flex-col justify-center items-center'>
        <div className='bg-white text-center basic-shadow pt-4 w-[386px] h-[110px] rounded-b-[30px] flex flex-col items-center'>
          <div className='flex justify-between items-center w-full px-4 mt-14 text-caption font-bold'>
            <div>뭐 먹을까? {user.customer[0].nickname}</div>
            <div className='flex justify-center items-center gap-1'>
              <div>{user.customer[0].BBCoin.toLocaleString()} BB</div>
              <img className='w-7' src={moneyBag} alt='돈주머니' />
            </div>
          </div>
        </div>

        <div className='relative bg-white w-[350px] h-8 mt-4'>
          <BsSearch
            size={16}
            style={{
              position: 'absolute',
              top: '50%',
              right: '12px',
              transform: 'translateY(-50%)',
              color: 'gray',
              pointerEvents: 'none',
            }}
          />
          <input
            className='w-full h-full border-purple border-[1.5px] rounded-lg px-3 py-2 text-caption focus:outline-none focus:border-2 focus:border-purple'
            type='text'
            placeholder='메뉴, 가게 이름으로 검색'
          />
        </div>
      </div>

      <div className='bg-white mt-4 pl-5 py-3 category-shadow '>
        <div className='font-bold text-subtitle text-left mb-2'>카테고리</div>
        <div className='flex overflow-x-auto pb-2 scrollbar-hide'>
          <CategoryCard img={Korean} text='한식' />
          <CategoryCard img={Hamburger} text='양식' />
          <CategoryCard img={Chinese} text='중식' />
          <CategoryCard img={Japanese} text='일식' />
          <CategoryCard img={Korean} text='한식' />
        </div>
      </div>

      <div className='bg-white mt-4 pl-5 py-3 category-shadow'>
        <div className='font-bold text-subtitle text-left mb-2'>최근 주문한 음식</div>
        <div className='flex overflow-x-auto pb-2 scrollbar-hide'>
          {user.store.map((v, i) => (
            <LatestOrderCard
              key={i}
              img={v.menu[0].menuImage}
              storeName={v.storeName}
              menuName={v.menu[0].name}
            />
          ))}
        </div>
      </div>

      <div className='bg-white mt-4 px-5 py-3 category-shadow'>
        <div className='font-bold text-subtitle text-left mb-2'>우리 동네 맛집</div>
        <div className='flex flex-col gap-4 mb-4'>
          {user.store.map((v, i) => (
            <MatZipCard
              key={i}
              storeId={i}
              storeName={v.storeName}
              deliveryFee={v.deliveryFee.toLocaleString()}
              img1={v.menu[2].menuImage}
              img2={v.menu[1].menuImage}
              img3={v.menu[0].menuImage}
            />
          ))}
        </div>
      </div>

      <div className='sticky bottom-0'>
        <div className='absolute right-2 bottom-16'>
          <CartIcon />
        </div>
        <BottomBar />
      </div>
    </div>
  );
};
