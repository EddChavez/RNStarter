import { useState, useEffect } from 'react';
import API from './movieDB';
import { AxiosResponse } from 'axios';

const useGetData = (
  path: string
): {
  data: AxiosResponse['data'];
  isFetching: boolean;
} => {
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [data, setData] = useState<AxiosResponse['data']>();

  useEffect(() => {
    async function getData(): Promise<AxiosResponse['data']> {
      try {
        setIsFetching(true);
        const response = await API.get(path);
        setData(response.data);
      } catch (err) {
        console.error(path, err);
        throw err;
      } finally {
        setIsFetching(false);
      }
    }

    getData();
  }, [path]);

  return { data, isFetching };
};

export default useGetData;
