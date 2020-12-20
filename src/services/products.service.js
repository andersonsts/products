import axios from 'axios';

export async function getAllProductsInCart({ option }) {
  const { data } = await axios.get(`http://localhost:3333/products/${option}`);

  return data;
}