import Link from 'next/link';
export default function NewsletterForm({}) {
  return (
    <div className='w-full flex items-center justify-center'>
      <div className='flex flex-col items-center justify-center px-10 py-10 w-full lg:w-6/12'>
        <h1 className='text-4xl py-5'>Want First Dibs?</h1>
        <div className='py-5'>
          <p className='font-md px-2 py-2'>
            Join our email list and be the first to know about new limited
            edition products, material innovations, and lots of other fun
            updates.
          </p>
        </div>
        <form className='w-full max-w-sm py-2'>
          <div className='flex items-center border-b border-teal-500 '>
            <input
              className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight'
              type='text'
              placeholder='Enter your email address'
              aria-label='Email'
            ></input>
          </div>
        </form>
        <Link href='/shop-category/women'>
          <button className='flex items-center justify-center btn btn-wide rounded-sm border ring-0 bg-white text-black hover:text-white'>
            <h5>SUBSCRIBE</h5>
          </button>
        </Link>
      </div>
    </div>
  );
}
