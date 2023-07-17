import { NFTChips } from "../components/Nft_Chips";
import star from "../images/icon_star.png";
import rightArrow from "../images/icon_chevron right_.png";

const StoreIntro = (props) => {
  return (
    <div className="bg-white w-80 h-[140px] flex flex-cols justify-center items-center rounded-2xl border-[1.5px] border-black yellow-shadow">
      <div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex gap-2">
            {props.storeName ? (
              <input
                className="w-46 h-8 border-b-[1.5px] border-black focus: outline-none focus:border-b-[1.5px] focus:border-deepYellow"
                type="text"
                placeholder={props.storeName}
              />
            ) : (
              <input
                className="w-46 h-8 border-b-[1.5px] border-black px-2 rounded-tl-full rounded-bl-full focus: outline-none focus:border-b-[1.5px] focus:border-deepYellow"
                type="text"
                placeholder="매장명을 입력해주세요!"
              />
            )}
            <button className="bg-deepYellow px-2 rounded-full text-center font-bold text-caption">
              수정
            </button>
          </div>
          <div className="flex justify-center items-end mt-2">
            {[...Array(parseInt(props.starCount))].map((_, i) => (
              <img className="w-5 mr-0.5" src={star} alt="star" />
              // <div className='text-subtitle'>⭐</div>
            ))}
            <img src={rightArrow} alt="rightArrow" />
          </div>
        </div>
        <div className="flex justify-center items-center gap-2 mt-4">
          {[...Array(parseInt(props.nftTitle.length))].map((v, i) => (
            <NFTChips key={i} title={props.nftTitle[i].title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoreIntro;
