export const CustomerMenuDetail = ({ title, options }) => {
  return (
    <div className='flex flex-col mx-6 mb-4'>
      <div className='font-bold text-body mb-4'>{title}</div>
      <div className='flex flex-col gap-3'>
        {options.map((value, index) => (
          <div className='flex' key={index}>
            <input className='w-4 accent-purple' type='radio' name={title} />
            <span className='ml-2 text-caption'>{value}</span>
          </div>
        ))}
        <div className='border-t border-lightGray border-[1px]'></div>
      </div>
    </div>
  );
};
