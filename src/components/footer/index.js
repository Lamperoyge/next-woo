import Link from 'next/link';
import { config } from './config';
export default function Footer() {
  return (
    <footer className='bg-coolGray-800 '>
      <div className='text-white flex flex-col sm:flex-row w-full sm:w-8/12 justify-between sm:px-24'>
        {config.map((item, idx) => {
          return (
            <div key={idx} className=''>
              <h3 className='text-lg py-5 text-center'>{item.title}</h3>
              <ul className='py-5 text-sm font-normal'>
                {item.links.map((link, linkId) => {
                  return (
                    <Link key={linkId} href={link.href}>
                      <li className='text-center font-poppins py-2 cursor-pointer'>
                        {link.title}
                      </li>
                    </Link>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
      <div className='text-white font-poppins flex items-center px-10 py-10'>
        <h4 className='w-full text-center'>
          © 2021 Allbirds, Inc. All Rights Reserved. Terms, Privacy &
          Accessibility
        </h4>
      </div>
    </footer>
  );
}
