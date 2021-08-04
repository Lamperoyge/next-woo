import { useState, useRef } from 'react';
import Link from 'next/link';
export default function DropdownMenu({ config }) {
  const [isOpen, setDrawerVisibility] = useState(false);

  const handleMenuClick = () => {
    setDrawerVisibility(!isOpen);
  };

  const menuRef = useRef(null);
  return (
    <div className='flex block lg:hidden'>
      <button className='h-8 w-8' onClick={handleMenuClick}>
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
            strokeWidth={1.5}
            d='M4 6h16M4 12h16M4 18h16'
          />
        </svg>
      </button>
      <aside
        ref={menuRef}
        className={`transform top-0 left-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div>
          <button
            type='button'
            onClick={handleMenuClick}
            className='w-full flex items-end justify-end py-3 px-3'
          >
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
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>
          <ul className='menu menu-center'>
            {config.map((item, idx) => {
              return (
                <li
                  key={idx}
                  className='flex items-center justify-center hover:bg-coolGray-800 hover:text-white border-b-2'
                >
                  <Link href={item.url} passHref>
                    <a>{item.title}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
    </div>
  );
}
