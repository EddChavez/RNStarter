import { useState } from 'react';
import API from './movieDB';
import { ApiConfig } from '@src/types/models/api/apiConfig';

const usePostData = (): {
  isFetching: boolean;
  postData: (config: ApiConfig) => Promise<any>;
} => {
  const [isFetching, setIsFetching] = useState(false);
  const postData = async ({ path, data, params }: ApiConfig): Promise<any> => {
    try {
      setIsFetching(true);
      const response = await API.post(path, data, {
        params,
      });

      return { ...response.data };
    } catch (err) {
      console.error(err);
      throw err;
    } finally {
      setIsFetching(false);
    }
  };

  return { isFetching, postData };
};

export default usePostData;
