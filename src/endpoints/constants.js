export const endpoint =
  process.env.API_ENDPOINT || 'http://localhost:8888/next-wp-ecom';

export const MENU_ENDPOINT = `${endpoint}/wp-json/myroutes/menu`;

export const VARIATIONS_ENDPOINT = '/api/get-product-variations';
