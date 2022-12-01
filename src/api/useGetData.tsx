import { useState } from 'react';
import API from './movieDB';
import { ApiConfig } from '@src/types/models/api/apiConfig';

const useGetData = (): {
  isFetching: boolean;
  getData: (config: ApiConfig) => Promise<any>;
} => {
  const [isFetching, setIsFetching] = useState(false);

  const getData = async ({ path, params }: ApiConfig): Promise<any> => {
    try {
      setIsFetching(true);
      const response = await API.get(path, { params });
      return { ...response.data };
    } catch (err) {
      console.error(err);
      throw err;
    } finally {
      setIsFetching(false);
    }
  };

  return {
    isFetching,
    getData,
  };
};

export default useGetData;
