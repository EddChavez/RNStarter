import axios from 'axios';
import NasaImagesAPIResponse from './NasaImagesAPIResponse';

const baseUrl = 'https://images-api.nasa.gov/search';

export const fetchNasaImagesAPI = async (text: string) => {
  try {
    const {data, status} = await axios.get<NasaImagesAPIResponse>(
      `${baseUrl}?q=${text}`,
      {
        headers: {
          Accept: 'application/json',
        },
      },
    );
    if (status === 200) {
      return data;
    } else {
      throw new Error(`Invalid response status: ${status}`);
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios Error: ', error.message);
      throw error;
    } else {
      console.error('Unexpected Error: ', error);
      throw error;
    }
  }
};
