import React from 'react';

export const RiderSelectedOrder = ({
  onClickEvent,
  orderNum,
  stor_address,
  cust_address,
  time,
  distance,
}) => {
  return (
    <div
      className='flex-none w-60 h-[180px] border-[1.5px] rounded-lg px-3 py-2 bg-white border-darkGray mr-4 solid-shadow cursor-pointer hover:border-2 hover:border-black'
      onClick={onClickEvent}>
      <div className='font-bold text-subtitle mb-2'>{orderNum}번</div>
      <div className='flex flex-col gap-4 mt-1'>
        <div className='flex flex-col'>
          <div className='text-body overflow-hidden overflow-ellipsis line-clamp-1'>
            매장: {stor_address}
          </div>
          <div className='text-body overflow-hidden overflow-ellipsis line-clamp-1'>
            고객: {cust_address}
          </div>
        </div>
        <div className='flex flex-col'>
          <div className='text-caption font-bold'>
            남은 시간: <span className='text-body font-bold'>{time} 분</span>
          </div>
          <div className='text-caption font-bold'>
            거리: <span className='text-body font-bold'>{distance} km</span>
          </div>
        </div>
      </div>
    </div>
  );
};
