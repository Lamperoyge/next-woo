import Link from 'next/link';
const TopBar = () => {
  return (
    <div className='px-4 py-1 bg-coolGray-800 text-white'>
      <p className='text-xs font-medium text-center'>
        Free shipping on orders over $50. Free returns.
        <Link href='/' passHref>
          <a className='underline'>Learn more</a>
        </Link>
      </p>
    </div>
  );
};

export default TopBar;
