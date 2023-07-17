const NftBox = (props) => {
  return (
    <div
      className={`flex flex-col items-start justify-center ${props.color} ${props.fontColor} w-[360px] h-[180px] rounded-2xl border-[1.5px] border-black basic-shadow`}>
      <div className='font-bold text-headline tracking-tighter ml-4 mb-2'>{props.title}</div>
      <div className='text-left ml-4'>
        {props.detail1}
        <br />
        {props.detail2}
      </div>
    </div>
  );
};

export default NftBox;
