import { useState } from 'react';
import { Link } from 'react-router-dom';

import { NFTChips } from '../components/Nft_Chips';
import NftMarket from '../components/Main_nftMarket';
import LongBox from '../components/Main_longBox';
import Box from '../components/Main_recBox';
import WorkBadgeBTN from '../components/Work_Btn';
import user from '../db/user.json';

export default function RiderMain() {
  const [deliveryCount, setDeliveryCount] = useState(7); //로그인에서 프롭스로 내려야할것같음
  const [isWork, setIsWork] = useState(true);

  const toggleWorkBtn = () => {
    setIsWork(!isWork);
  };

  return (
    <>
      <div className='bg-white w-[386px] h-14 absolute z-10'></div>
      <div className='flex justify-center mt-4'>
        <div className='border-[1px] px-2 rounded-lg max-w-[250px] border-darkGray whitespace-nowrap overflow-ellipsis overflow-hidden absolute z-20'>
          {user.rider[0].deliveryArea}
        </div>
      </div>

      <div className='flex flex-col justify-center items-center tracking-tighter mt-4 mb-6'>
        <div className='w-[350px] flex flex-col gap-2 justify-between my-8'>
          <div className='text-headline font-bold'>{user.rider[0].nickName} 라이더님!</div>
          <div className='text-subtitle font-bold'>어제 {deliveryCount}번 배달했어요!</div>
          <div className='text-subtitle font-bold'>오늘도 안전 운전하세요!</div>
        </div>

        <div className='w-[350px] flex justify-between items-end gap-2'>
          <div className='w-80'>
            <div className=' flex justify-start items-center gap-2 flex-wrap overflow-hidden h-16'>
              {user.rider[0].nft.map((v, i) => (
                <NFTChips key={i} title={v.title} />
              ))}
            </div>
          </div>
          <div onClick={toggleWorkBtn}>
            <WorkBadgeBTN
              text={isWork ? '배달중' : '배달안함'}
              color={isWork ? 'bg-mint' : 'bg-gray'}
            />
          </div>
        </div>

        <div className='w-[360px] flex flex-col justify-between items-center gap-4 mt-8'>
          <Link to={'/rider/newlist'}>
            <LongBox text='새로운 배달을 시작해요!' color='bg-lightGray' />
          </Link>

          <Link to={'/rider/delivery'}>
            <LongBox text='현재 배달 중인 목록' color='bg-lightGray' />
          </Link>

          <div className='flex justify-around w-full'>
            <Box text='오늘의 수익' color='bg-lightBage' width='24' />
            <Box text='프로필 보기' color='bg-deepYellow' width='24' />
          </div>

          <Link to='/rider/nftmarket'>
            <NftMarket />
          </Link>
        </div>
      </div>
    </>
  );
}
