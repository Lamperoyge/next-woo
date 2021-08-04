export default function Cart() {
  return (
    <div className='flex'>
      <button className='h-8 w-8'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-8 w-8'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            className='absolute'
            strokeWidth={1}
            d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
          />
        </svg>
        <span
          className='relative text-xs'
          style={{ bottom: '3.4em', fontSize: '10px', left: '1px' }}
        >
          0
        </span>
      </button>
    </div>
  );
}
