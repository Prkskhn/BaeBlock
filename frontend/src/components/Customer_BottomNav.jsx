import { Link } from 'react-router-dom';
import like from '../images/icon_like.png';
import list from '../images/icon_list.png';
import rocket from '../images/icon_rocket.png';
import shop from '../images/icon_shop.png';
import user from '../images/icon_user.png';

const BottomBar = () => {
  return (
    <div className='bg-white up-shadow rounded-t-3xl pt-1 w-[386px] h-[60px] flex justify-evenly items-center'>
      <Link to='/customer/main'>
        <img className='w-12' src={shop} alt='shop' />
      </Link>

      <Link to='/customer/mypage'>
        <img className='w-12' src={list} alt='list' />
      </Link>

      <Link to='/customer/ordercomplete'>
        <img className='w-12' src={rocket} alt='rocket' />
      </Link>

      <img className='w-12' src={like} alt='like' />

      <img className='w-12' src={user} alt='user' />
    </div>
  );
};

export default BottomBar;
