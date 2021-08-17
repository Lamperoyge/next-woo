import Link from 'next/link';

export const colorConfig = {
  IS_NEW_BACKGROUND_COLOR: '#e8a092',
  IS_NEW_TEXT_COLOR: 'white',
};
export default function Menu({ config = [] }) {
  return (
    <ul className='block hidden lg:flex w-5/12'>
      {config.map((item, idx) => {
        return (
          <li key={idx}>
            <div className='relative'>
              <Link href={item.url} passHref>
                <a className='font-poppins py-4 px-4 font-bold text-sm'>
                  {item.title}
                </a>
              </Link>
              {item.isNew ? (
                <span
                  style={{
                    background: colorConfig.IS_NEW_BACKGROUND_COLOR,
                    color: colorConfig.IS_NEW_TEXT_COLOR,
                  }}
                  className='new-badge'
                >
                  NEW
                </span>
              ) : null}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
