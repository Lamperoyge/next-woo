import { urlExtractor } from 'utils/extractUrl';
import Link from 'next/link';
export default function ProductCard({ classnames, idx, item }) {
  return (
    <div key={idx} className={`flex flex-col ${classnames}`}>
      <Link href={urlExtractor(item.permalink)}>
        <img src={item.images[0].src} className='w-80 cursor-pointer' />
      </Link>
      <div className='py-5'>
        <h3 className='text-lg'>{item.name}</h3>
        <h5 className='text-sm'>{item.categories[0].name}</h5>
        <h5 className='text-sm'>{item.price + ' LEI'}</h5>
      </div>
    </div>
  );
}
