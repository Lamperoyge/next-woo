import api from './woo.js';

export default async function getFeaturedProducts(req, res) {
  try {
    const response = await api.get('products');
    res.status(200).json(response.data);
  } catch (error) {
    res.status(400).send({ error });
  }
}
