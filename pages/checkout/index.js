import dynamic from 'next/dynamic';
const Form = dynamic(() => import('components/checkout/form'));
import Link from 'next/link';
const CheckoutProducts = dynamic(() =>
  import('components/checkout/checkoutProducts')
);
export default function CheckoutPage() {
  return (
    <div>
      <div className='flex flex-col md:flex-row justify-between'>
        <div className='md:w-10/12'>
          <Link href='/'>
            <div className='cursor-pointer py-10 pl-10 flex'>
              <img
                className='h-12'
                src='/images/logo.svg'
                alt='Allbirds logo'
              />
            </div>
          </Link>
          <Form />
        </div>
        <CheckoutProducts />
      </div>
    </div>
  );
}
