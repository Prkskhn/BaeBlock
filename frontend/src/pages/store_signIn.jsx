import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/BBLogoLightGradient.png';
import StoreLogo from '../images/store_signIn.png';

export const StoreSignIn = () => {
  return (
    <div className='flex flex-col items-center'>
      <img className='w-[340px] mt-28' src={Logo} alt='Logo' />
      <img className='w-32 mt-14' src={StoreLogo} alt='customer logo' />
      <Link to='/store/regist'>
        <button className='bg-lightYellow btn-style text-black yellow-shadow mt-14 ease-in-out duration-200 hover:scale-105'>
          회원가입
        </button>
      </Link>
      <Link to='/store/main'>
        <button className='bg-lightGray btn-style text-black gray-shadow mt-7 ease-in-out duration-200 hover:scale-105'>
          로그인
        </button>
      </Link>
    </div>
  );
};
