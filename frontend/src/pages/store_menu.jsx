import { useContext } from 'react';
import { AppContext } from '../App';
import plus from '../images/icon_plus.png';
import food from '../images/food.png';

import MenuList from '../components/MenuList';
import StoreIntroEdit from '../components/Store_IntroEdit';
import { Link } from 'react-router-dom';

export default function CustomerViewMenu() {
  const { Astore } = useContext(AppContext);

  return (
    <div className='flex flex-col justify-start items-center'>
      <div className='min-w-full h-[250px]'>
        <img className='w-full h-full object-cover' src={food} alt='food' />

        <div className='relative'>
          <div className='absolute left-8 -top-14 flex flex-col justify-center items-center'>
            <div className='flex flex-col'>
              <StoreIntroEdit storeName={Astore.storeName} nftTitle={Astore.nft} starCount='5' />
            </div>
          </div>
        </div>
      </div>

      <div className='mt-28'>
        <div className='text-subtitle font-bold text-left mb-2 ml-1'>메뉴</div>

        <Link to='/store/edit/menu'>
          <div className='bg-white w-[350px] h-[100px] flex justify-center items-center p-4 rounded-2xl border-[1.5px] border-darkGray solid-shadow font-bold text-headline mb-4'>
            메뉴 추가
            <img className='ml-4 w-6 h-6' src={plus} alt='plus button' />
          </div>
        </Link>

        <div className='flex flex-col gap-4 mb-4'>
          {Astore.menu.map((v, i) => (
            <MenuList
              key={i}
              name={v.name}
              caption={v.caption}
              price={v.price}
              isRecommend={v.recommend}
              showPencile={true}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
