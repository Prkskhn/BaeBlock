import React from 'react';

export const CategoryCard = ({ img, text }) => {
  return (
    <div className='flex-shrink-0 bg-deepYellow border-darkGray border-[1.5px] rounded-2xl w-20 h-[100px] solid-shadow mr-3'>
      <div className='flex flex-col items-center'>
        <div className='bg-white w-[70px] h-[70px] rounded-full mt-1 flex items-center justify-center'>
          <img src={img} alt='' className='w-full h-full object-cover rounded-full' />
        </div>
        <div className='text-caption font-bold text-white'>{text}</div>
      </div>
    </div>
  );
};
