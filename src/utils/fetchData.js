import axios from 'axios';

export async function getData(endpoint) {
  const response = await axios.get(endpoint);
  return response.data;
}

export async function getFeaturedProducts() {
  try {
    const response = await axios.get('/api/get-featured-products');
    return response.data;
  } catch (error) {
    throw new Error(error.response.data);
  }
}

export async function getProductsData(params) {
  try {
    const response = await axios.get('/api/get-products', {
      params: {
        params: JSON.stringify(params),
      },
    });
    console.log(response);
    return {
      data: response.data.result,
      count: response.data.count,
    };
  } catch (error) {
    console.log(error);
    throw new Error(error.response.data);
  }
}

export async function getCategoriesData() {
  try {
    const response = await axios.get('/api/product-categories');
    return response.data;
  } catch (error) {
    throw new Error(error.response.data);
  }
}

export async function getHighlightedProducts() {
  try {
    const response = await axios.get('/api/get-highlighted-products');
    return response.data;
  } catch (error) {
    throw new Error(error.response.data);
  }
}
