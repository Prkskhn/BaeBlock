import React, { useState } from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';

export const PaymentMenu = (props) => {
  const [counter, setCounter] = useState(1);
  const onClickAdd = () => {
    setCounter(counter + 1);
  };
  const onClickSub = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className='border-b-[1.5px] pb-4 border-lightGray'>
      <div className='flex justify-between items-center'>
        <div className='font-bold text-body'>{props.foodName}</div>
        <FaRegTrashAlt />
      </div>
      <div className='text-caption mt-2'>{props.option}</div>
      <div className='flex justify-between items-center'>
        <div className='font-bold text-caption mt-2'>{props.price} 원</div>
        <div className='w-24 h-7 flex justify-between items-center gap-4 font-bold border-[1.5px] border-gray rounded-full px-3'>
          <div className={`${counter === 1 ? 'text-gray' : 'text-black'}`} onClick={onClickSub}>
            -
          </div>
          <div>{counter}</div>
          <div onClick={onClickAdd}>+</div>
        </div>
      </div>
    </div>
  );
};
