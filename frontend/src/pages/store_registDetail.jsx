import Logo from '../images/BBLogoLightGradient.png';
import { Link } from 'react-router-dom';

export const StoreRegistDetail = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-24'>
      <div className='font-bold text-[24px]'>메타마스크 연결에 성공했어요!</div>
      <div className='text-subtitle text-center mt-5 regist-entry'>
        사장님의 매장 정보를 <p>입력해주세요!</p>
      </div>
      <div className='regist-entry'>
        <div className='mt-20'>
          <div className='text-gray text-caption font-bold'>매장명</div>
          <input
            type='text'
            className='w-80 mt-2 pb-1 text-body font-bold text-black border-b-[1.5px] border-darkGray focus: outline-none focus:border-b-[1.5px] focus:border-deepYellow'
          />
        </div>
        <div className='mt-12'>
          <div className='text-gray text-caption font-bold'>매장 주소</div>
          <input
            type='text'
            className='w-80 mt-2 pb-1 text-body font-bold text-black border-b-[1.5px] border-darkGray focus:outline-none focus:border-b-[1.5px] focus:border-deepYellow'
          />
        </div>
        <div className='text-caption text-purple mt-8'>비밀번호는 필요 없나요?</div>
      </div>
      <Link to='/store/main'>
        <button className='bg-lightYellow btn-style text-black yellow-shadow mt-20 ease-in-out duration-200 hover:scale-105'>
          메뉴 등록하러 가기!
        </button>
      </Link>
      <img className='w-20 mt-20' src={Logo} alt='Logo' />
    </div>
  );
};
