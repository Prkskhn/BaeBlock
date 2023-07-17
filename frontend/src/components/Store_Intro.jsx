import { NFTChips } from "../components/Nft_Chips";
import star from "../images/icon_star.png";
import rightArrow from "../images/icon_chevron right_.png";
import { useEffect } from "react";

const StoreIntro = (props) => {
  useEffect(() => {
    console.log(props.nftTitle.name);
  }, []);

  return (
    <div className="bg-white w-80 h-[140px] flex flex-cols justify-center items-center rounded-2xl border-[1.5px] border-black yellow-shadow overflow-hidden">
      <div>
        <div className="flex flex-col justify-center items-center">
          <div className="w-72 text-center font-bold text-headline whitespace-nowrap overflow-hidden overflow-ellipsis tracking-tighter">
            {props.storeName}
          </div>
          <div className="flex justify-center items-center">
            {[...Array(parseInt(props.starCount))].map((_, i) => (
              <img className="w-5 mr-0.5" key={i} src={star} alt="star" />
            ))}
            <img src={rightArrow} alt="rightArrow" />
          </div>
        </div>
        <div className="flex justify-center px-4 items-center gap-2 mt-4">
          {[...Array(parseInt(props.nftTitle.length))].map((v, i) => (
            <NFTChips key={i} title={props.nftTitle[i].title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoreIntro;
