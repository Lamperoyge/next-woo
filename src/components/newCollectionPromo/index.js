import Link from 'next/link';
export default function NewCollectionPromo() {
  return (
    <div className='flex flex-col items-center justify-center px-10 py-10'>
      <h1 className='text-4xl py-5'>PRE-FALL 2021</h1>
      <div className='py-5'>
        <p>
          Explore sports-inspired ready-to-wear and bold accessories from the
          latest collection.
        </p>
      </div>
      <Link href='/shop-category/women'>
        <button className='flex items-center justify-center btn btn-wide rounded-sm border bg-white text-black hover:text-white'>
          <h5>NEW IN FOR HER</h5>
        </button>
      </Link>
    </div>
  );
}
