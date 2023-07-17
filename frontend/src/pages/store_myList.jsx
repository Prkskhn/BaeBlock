import React from 'react';
import { StoreMySelectedList } from '../components/Store_mySelectedList';

export const StoreMyList = () => {
  return (
    <div className='flex flex-col'>
      <div className='bg-white w-[386px] h-14 absolute z-10'></div>
      <div className='flex justify-center pt-4'>
        <div className='font-bold text-subtitle max-w-[250px] whitespace-nowrap overflow-ellipsis overflow-hidden absolute z-20'>
          현재 주문 목록
        </div>
      </div>
      <div className='flex flex-col justify-center items-center mt-14'>
        <StoreMySelectedList />
      </div>
    </div>
  );
};
