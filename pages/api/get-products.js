import api from './woo.js';

export default async function getProductDataWithParams(req, res) {
  try {
    const response = await api.get('products', JSON.parse(req.query.params));
    res
      .status(200)
      .json({ result: response.data, count: response.headers['x-wp-total'] });
  } catch (error) {
    res.status(400).send({ error });
  }
}
