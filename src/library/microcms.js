import axios from 'axios';

export async function getMicroCMSData(endpoint) {
  const url = `https://${import.meta.env.MICROCMS_SERVICE_DOMAIN}.microcms.io/api/v1/${endpoint}`;
  const response = await axios.get(url, {
    headers: { 'X-API-KEY': import.meta.env.MICROCMS_API_KEY },
  });
  return response.data;
}
