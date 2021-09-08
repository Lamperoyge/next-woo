import dynamic from 'next/dynamic';
const api = dynamic(() => import('utils/woo.js'));
const ProductImages = dynamic(() => import('components/productImages'));
const ProductData = dynamic(() => import('components/productData'));
export default function ProductPage({ product }) {
  return (
    <div className='container py-10'>
      <div className='flex'>
        <section className='w-full sm:w-6/12'>
          <ProductImages images={product.images} />
        </section>
        <section>
          <ProductData product={product} />
        </section>
      </div>
      <div>
        <section></section>
      </div>
      <Newsletter />
    </div>
  );
}

export async function getServerSideProps(context) {
  const response = await api.get(`products/${context.query.id}`);

  return {
    props: {
      product: response.data,
    }, // will be passed to the page component as props
  };
}
