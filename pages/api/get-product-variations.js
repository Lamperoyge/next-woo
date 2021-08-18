import api from './woo.js';

export default async function getProductVariations(req, res) {
  try {
    const response = await api.get(
      `products/${JSON.parse(req.query.params).id}/variations`
    );
    const data = response.data.map((item) => {
      item['attrCombination'] = [];

      item.attributes.forEach((attr) => {
        // item[attr.name] = attr.option;
        item['attrCombination'].push(attr.option);
      });
      return item;
    });
    res
      .status(200)
      .json({ result: data, count: response.headers['x-wp-total'] });
  } catch (error) {
    res.status(400).send({ error });
  }
}
