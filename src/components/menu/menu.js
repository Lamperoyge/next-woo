import Link from 'next/link';
export default function Menu({ config = [] }) {
  return (
    <ul className='block hidden lg:flex w-5/12'>
      {config.map((item, idx) => {
        return (
          <li key={idx}>
            <div>
              <Link href={item.url} passHref>
                <a className='font-poppins py-4 px-4 font-bold text-sm'>
                  {item.title}
                </a>
              </Link>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
