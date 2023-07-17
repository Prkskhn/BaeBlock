import React from 'react';
import { FaWifi, FaBatteryThreeQuarters } from 'react-icons/fa';
import { GiNetworkBars } from 'react-icons/gi';

export const Header = () => {
  return (
    <div className='flex justify-center mb-8'>
      <div className='bg-white rounded-t-2xl flex justify-between w-[386px] px-6 pt-2.5 absolute z-10'>
        <div>9 : 41</div>
        <div className='flex gap-2 items-center'>
          <GiNetworkBars size={16} />
          <FaWifi size={16} />
          <FaBatteryThreeQuarters size={20} />
        </div>
      </div>
    </div>
  );
};
