import api from '../api/woo.js';
import ProductImages from 'components/productImages';
import Title from 'components/title';
import Attributes from 'components/attributes';
export default function ProductPage({ product }) {
  console.log(product);
  return (
    <div className='container py-10'>
      <div className='flex'>
        <section className='w-full sm:w-6/12'>
          <ProductImages images={product.images} />
        </section>
        <section>
          <Title title={product.name} size='text-3xl' />
          <Attributes options={product.attributes} />
          <div dangerouslySetInnerHTML={{ __html: product.description }} />
        </section>
      </div>
      <div>
        <section></section>
      </div>
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
