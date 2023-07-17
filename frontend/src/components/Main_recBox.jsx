const Box = (props) => {
  return (
    <div
      className={`w-[170px] h-[175px] ${props.color} rounded-lg border-[1.5px] border-black basic-shadow ease-in-out duration-200 hover:scale-105`}>
      <div className={`font-bold text-headline p-2 w-${props.width} leading-8`}>{props.text}</div>
    </div>
  );
};

export default Box;
