import { useState, useContext } from 'react';
import { AppContext } from '../App';
import { NFTChips } from '../components/Nft_Chips';
import { Link } from 'react-router-dom';

import NftMarket from '../components/Main_nftMarket';
import LongBox from '../components/Main_longBox';
import Box from '../components/Main_recBox';
import WorkBadgeBTN from '../components/Work_Btn';

export default function RiderMain() {
  const [monthProfit, setMonthProfit] = useState('100,000,000'); //로그인에서 프롭스로 내려야할것같음
  const [isWork, setIsWork] = useState(true);
  const { Astore } = useContext(AppContext);

  const toggleWorkBtn = () => {
    setIsWork(!isWork);
  };

  return (
    <>
      <div className='bg-white w-[386px] h-14 absolute z-10'></div>
      <div className='flex justify-center mt-4'>
        <div className='border-[1px] px-2 rounded-lg max-w-[250px] border-darkGray whitespace-nowrap overflow-ellipsis overflow-hidden absolute z-20'>
          {Astore.storeName}
        </div>
      </div>

      <div className='flex flex-col justify-center items-center tracking-tighter mt-4 mb-6'>
        <div className='w-[350px] flex flex-col gap-2 justify-between my-8'>
          <div className='text-headline font-bold'>{Astore.storeName} 사장님!</div>
          <div className='text-subtitle font-bold'>이번 달 매출은 {monthProfit}원 입니다!</div>
          <div className='text-subtitle font-bold'>오늘도 잘 먹겠습니다!</div>
        </div>

        <div className='w-[350px] flex justify-between items-end gap-2'>
          <div className='w-80'>
            <div className=' flex justify-start items-center gap-2 flex-wrap overflow-hidden h-16'>
              {Astore.nft.map((v, i) => (
                <NFTChips key={i} title={v.title} />
              ))}
            </div>
          </div>
          <div onClick={toggleWorkBtn}>
            <WorkBadgeBTN
              text={isWork ? '영업중' : '영업안함'}
              color={isWork ? 'bg-mint' : 'bg-gray'}
            />
          </div>
        </div>

        <div className='w-[360px] flex flex-col justify-between items-center gap-4 mt-8'>
          <Link to={'/store/newlist'}>
            <LongBox text='새로운 주문이 들어왔어요!' color='bg-lightGray' />
          </Link>
          <Link to={'/store/mylist'}>
            <LongBox text='현재 수락한 주문 리스트' color='bg-lightGray' />
          </Link>

          <div className='flex justify-around w-full'>
            <Box text='매출 보기' color='bg-lightBage' width='20' />
            <Link to={'/store/edit'}>
              <Box text='메뉴 수정' color='bg-deepYellow' width='20' />
            </Link>
          </div>

          <Link to='/store/nftmarket'>
            <NftMarket />
          </Link>
        </div>
      </div>
    </>
  );
}
