import usePostData from '@src/api/usePostData';
import { AccountStates } from '@src/types/models/accountStateInterface';
import { useEffect, useState } from 'react';
import useGetData from '../api/useGetData';
import { useToast } from 'react-native-toast-notifications';

interface GetAccountStates {
  id: number;
}

export const useGetAccountStates = ({ id }: GetAccountStates) => {
  const [accountStates, setAccountStates] = useState<AccountStates>();
  const { getData, isFetching } = useGetData();
  const { postData } = usePostData();
  const [fetchingRate, setFetchingRate] = useState(false);

  const toast = useToast();

  const getAccountStates = async () => {
    const response = await getData({ path: `movie/${id}/account_states` });
    setAccountStates(response);
  };

  useEffect(() => {
    getAccountStates();
  }, [id]);

  const rateMovie = async ({ movieId, rateMovie }: any) => {
    setFetchingRate(true);
    await postData({
      path: `movie/${movieId}/rating`,
      data: { value: rateMovie },
    });
    toast.show('Tu puntuación ha sido guardada', {
      type: 'success',
      onClose: () => setFetchingRate(false),
    });
  };

  const toggleFavoriteMovie = async ({
    movieId,
    isFavorite,
  }: {
    movieId: number;
    isFavorite: boolean;
  }) => {
    await postData({
      path: '/account/11717623/favorite',
      data: {
        media_type: 'movie',
        media_id: movieId,
        favorite: isFavorite,
      },
    });
    await getAccountStates();
  };

  return {
    isLoadingAccountStates: isFetching,
    accountStates,
    rateMovie,
    fetchingRate,
    toggleFavoriteMovie,
  };
};
