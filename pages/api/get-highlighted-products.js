import api from 'utils/woo';

export default async function getHighlightedProducts(req, res) {
  try {
    const response = await api.get('products', { tag: 36 });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(400).send({ error });
  }
}
