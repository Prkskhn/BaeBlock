const WorkBadgeBTN = (props) => {
  const textWidth = props.color === 'bg-gray' ? 'w-12' : '';

  return (
    <button
      className={`w-20 h-20 ${props.color} text-lightBage flex justify-center items-center rounded-full border-2 basic-shadow ease-in-out duration-200 hover:scale-110`}>
      <div className={`text-subtitle font-bold text-center leading-tight ${textWidth}`}>
        {props.text}
      </div>
    </button>
  );
};
export default WorkBadgeBTN;
