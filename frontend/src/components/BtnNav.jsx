import { HiOutlineArrowSmLeft } from 'react-icons/hi';
import { TbWallet, TbWalletOff } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';

const BtnNav = ({ scrollPosition, account, onClickAccount }) => {
  const navigate = useNavigate();
  const onClickBtn = () => {
    navigate(-1);
  };
  const bgColor = scrollPosition >= 250 ? 'bg-white' : 'transparent';

  return (
    <div className='flex justify-center'>
      <div
        className={`${bgColor} w-[386px] flex justify-between items-center pt-4 pb-2 px-6 fixed z-20`}>
        <HiOutlineArrowSmLeft size={24} onClick={onClickBtn} />
        {account ? (
          <div className='relative group'>
            <TbWallet size={24} />
            <div className='absolute z-50 mt-2 right-0 bg-purple text-white px-2 rounded-2xl transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100'>
              {`${account.substring(0, 4)}...${account.substring(account.length - 4)}`}
            </div>
          </div>
        ) : (
          <TbWalletOff size={24} onClick={onClickAccount} />
        )}
      </div>
    </div>
  );
};

export default BtnNav;
