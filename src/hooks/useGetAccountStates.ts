import usePostData from '@src/api/usePostData';
import { AccountStates } from '@src/types/models/accountStateInterface';
import { useEffect, useState } from 'react';
import useGetData from '../api/useGetData';

interface GetAccountStates {
  id: number;
}

export const useGetAccountStates = ({ id }: GetAccountStates) => {
  const [accountStates, setAccountStates] = useState<AccountStates>();
  const { getData, isFetching } = useGetData();
  const { isFetching: isFetchingPost, postData } = usePostData();

  const getAccountStates = async () => {
    const response = await getData({ path: `movie/${id}/account_states` });
    setAccountStates(response);
  };

  useEffect(() => {
    getAccountStates();
  }, []);

  const rateMovie = async ({ movieId, rateMovie }: any) => {
    const response = await postData({
      path: `movie/${movieId}/rating`,
      data: { value: rateMovie },
    });
    console.log(response);
  };

  return {
    isLoadingAccountStates: isFetching,
    accountStates,
    rateMovie,
  };
};
