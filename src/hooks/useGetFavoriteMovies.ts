import { useEffect, useState } from 'react';
import useGetData from '../api/useGetData';

export const useGetFavoriteMovies = () => {
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const { getData, isFetching } = useGetData();

  const getFavoriteMovies = async () => {
    const { results } = await getData({
      path: '/account/11717623/favorite/movies',
    });
    return results;
    // setFavoriteMovies(results);
  };

  useEffect(() => {
    getFavoriteMovies();
  }, []);

  return {
    isLoadingGetFavoriteMovies: isFetching,
    favoriteMovies,
    getFavoriteMovies,
  };
};
