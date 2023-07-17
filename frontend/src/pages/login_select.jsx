import React from 'react';
import Logo from '../images/BBLogoLightGradient.png';
import { Link } from 'react-router-dom';

const LoginSelect = () => {
  return (
    <div>
      <img className='w-[340px] m-auto mt-28' src={Logo} alt='Logo' />
      <div className='flex flex-col gap-7 justify-center items-center mt-36'>
        <Link to='/customer/signin'>
          <button className='bg-lightYellow btn-style text-black yellow-shadow ease-in-out duration-200 hover:scale-105'>
            고객
          </button>
        </Link>
        <Link to='/store/signin'>
          <button className='bg-lightYellow btn-style text-black yellow-shadow ease-in-out duration-200 hover:scale-105'>
            매장
          </button>
        </Link>
        <Link to='/rider/signin'>
          <button className='bg-lightYellow btn-style text-black yellow-shadow ease-in-out duration-200 hover:scale-105'>
            라이더
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LoginSelect;
