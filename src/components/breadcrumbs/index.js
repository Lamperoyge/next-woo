import Link from 'next/link';
const BreadCrumbs = () => {
  return (
    <div className='flex justify-between'>
      <div>
        <div>
          <Link href='/' passHref>
            Home
          </Link>
        </div>
        <div>Women's shoes</div>
      </div>
      <div>
        <button className='h-6 w-6'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={1}
              d='M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4'
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default BreadCrumbs;
