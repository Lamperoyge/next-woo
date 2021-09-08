import api from 'utils/woo';

export default async function getFeaturedProducts(req, res) {
  try {
    const response = await api.get('products', { featured: true });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(400).send({ error });
  }
}
