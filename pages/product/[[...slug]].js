import api from '../api/woo.js';
import ProductImages from 'components/productImages';
import ProductData from 'components/productData';
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
