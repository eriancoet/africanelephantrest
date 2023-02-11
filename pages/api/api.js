import axios from 'axios';

export default async function sendEmail(data) {
  try {
    const response = await axios.post('/api/send-email', data);
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
}
