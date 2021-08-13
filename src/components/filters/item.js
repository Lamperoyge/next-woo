import { useState } from 'react';

export default function Item({ item }) {
  const [isMenuVisible, setMenuVisibility] = useState(false);

  const toggleMenu = () => setMenuVisibility(!isMenuVisible);
  return (
    <div className='p-10'>
      <div className='dropdown inline-block relative'>
        <button
          onClick={toggleMenu}
          className='bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center'
        >
          <span className='mr-1'>{item.title}</span>
          <svg
            className='fill-current h-4 w-4'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
          >
            <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />{' '}
          </svg>
        </button>
        <ul
          className={`dropdown-menu absolute ${
            isMenuVisible ? 'block' : 'hidden'
          } text-gray-700 pt-1`}
        >
          {item.values.map((value, valueIdx) => {
            return (
              <li key={valueIdx}>
                <a
                  className='capitalize rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap'
                  href='#'
                >
                  {value}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
