import dynamic from 'next/dynamic';
const Form = dynamic(() => import('components/checkout/form'));
const Title = dynamic(() => import('components/title'));
export default function CheckoutPage() {
  return (
    <div className='py-10'>
      <Title title='Checkout' />
      <div>
        <Form />
        <div>items</div>
      </div>
    </div>
  );
}
