import api from '../api/woo.js';

export default function ProductPage({ product }) {
  return <div>{product.name}</div>;
}

export async function getServerSideProps(context) {
  const response = await api.get(`products/${context.query.id}`);

  return {
    props: {
      product: response.data,
    }, // will be passed to the page component as props
  };
}
