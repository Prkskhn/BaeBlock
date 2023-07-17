import nftShop from '../images/icon_Approved Shop.png';

const NftMarket = () => {
  return (
    <div className='bg-gradient-to-b from-purple to-deepYellow w-[350px] h-[160px] border-black rounded-lg border-[1.5px] basic-shadow ease-in-out duration-200 hover:scale-105'>
      <div className='flex justify-between'>
        <div className='font-bold text-headline p-2 leading-8 text-lightBage'>NFT 마켓</div>
        <img className='w-40' src={nftShop} alt='nftMarket' />
      </div>
    </div>
  );
};

export default NftMarket;
