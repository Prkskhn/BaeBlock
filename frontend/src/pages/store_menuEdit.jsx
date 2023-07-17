import BtnNav from '../components/BtnNav';
import orange from '../images/orange.jpg';

function StoreMenuEdit() {
  return (
    <div>
      <div className='flex flex-col'>
        <BtnNav />
        <div className='mt-16 ml-8 text-headline font-bold'>메뉴를 추가해요!</div>

        <div className='text-gray text-caption font-bold mt-12 ml-8'>
          대표 이미지
          <img className='w-32 h-32 object-cover mt-2 rounded-xl' src={orange} alt='orange' />
        </div>

        <div className='flex flex-col items-center gap-8 mt-12'>
          <div>
            <div className='text-gray text-caption font-bold'>메뉴 이름</div>
            <input
              type='text'
              className='w-80 mt-2 pb-1 text-body font-bold text-black border-b-[1.5px] border-darkGray focus: outline-none focus:border-b-[1.5px] focus:border-deepYellow'
            />
          </div>
          <div>
            <div className='text-gray text-caption font-bold'>메뉴 상세 설명</div>
            <input
              type='text'
              className='w-80 mt-2 pb-1 text-body font-bold text-black border-b-[1.5px] border-darkGray focus: outline-none focus:border-b-[1.5px] focus:border-deepYellow'
            />
          </div>
          <div>
            <div className='text-gray text-caption font-bold'>가격</div>
            <input
              type='text'
              className='w-80 mt-2 pb-1 text-body font-bold text-black border-b-[1.5px] border-darkGray focus: outline-none focus:border-b-[1.5px] focus:border-deepYellow'
            />
          </div>
          <button className='bg-lightYellow btn-style mt-8'>저장</button>
        </div>
      </div>
    </div>
  );
}

export default StoreMenuEdit;
