import axios from 'axios';

const PROXY = import.meta.env.VITE_SAAVN_PROXY;

export const searchSaavn = async (query) => {
  const response = await axios.get(`${PROXY}/search`, {
    params: { q: query }
  });
  return response.data;
};