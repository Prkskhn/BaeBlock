import { Link, useParams } from 'react-router-dom';
import pencil from '../images/icon_pencil_.png';

const MenuList = ({ menuId, name, caption, price, isRecommend, menuImage, showPencile }) => {
  const { storeId } = useParams();
  console.log(menuImage);
  return (
    <Link to={`/customer/viewmenu/${storeId}/${menuId}`}>
      <div className='bg-white w-[350px] h-[100px] flex justify-between items-center p-4 rounded-2xl border-[1.5px] border-darkGray solid-shadow'>
        <div className='flex flex-col'>
          <div className='flex flex-col'>
            <div className='flex gap-2 items-center'>
              <div className='text-subtitle font-bold'>{name}</div>
              {isRecommend ? (
                <div className='bg-deepYellow rounded-full px-1 text-white text-caption'>
                  사장님 추천
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <div className='text-caption text-darkGray'>{caption}</div>
          </div>
          <div className='text-caption text-darkGray mt-1'>{price}원</div>
        </div>

        <div className='relative rounded-lg w-20 h-20 border-4 border-deepYellow'>
          {showPencile && (
            <div className='absolute bottom-[-12px] right-[-12px]'>
              <Link to='/store/edit/menu'>
                <img src={pencil} alt='pencil' />
              </Link>
            </div>
          )}
          <img className='min-h-full object-cover' src={menuImage} alt='' />
        </div>
      </div>
    </Link>
  );
};
export default MenuList;
