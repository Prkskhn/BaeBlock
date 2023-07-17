import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/BBLogoLightGradient.png';
import RiderLogo from '../images/rider_signIn.png';

export const RiderSignIn = () => {
  return (
    <div className='flex flex-col items-center'>
      <img className='w-[340px] mt-28' src={Logo} alt='Logo' />
      <img className='w-32 mt-14' src={RiderLogo} alt='customer logo' />
      <Link to='/rider/regist'>
        <button className='bg-lightYellow btn-style text-black yellow-shadow mt-14 ease-in-out duration-200 hover:scale-105'>
          회원가입
        </button>
      </Link>
      <Link to='/rider/main'>
        <button className='bg-lightGray btn-style text-black gray-shadow mt-7 ease-in-out duration-200 hover:scale-105'>
          로그인
        </button>
      </Link>
    </div>
  );
};
