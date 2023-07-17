import React from 'react';

export const DeliveryFeeChip = ({ deliveryFee }) => {
  return (
    <div className='w-[135px] flex justify-center items-center gap-1 bg-white px-2 py-[1px] rounded-xl border-2 border-[#FE4141] red-shadow mb-2 text-body'>
      배달료<span className='font-bold'>{deliveryFee.toLocaleString()}원!</span>
    </div>
  );
};
