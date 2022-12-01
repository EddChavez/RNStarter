import { MovieFull } from '@src/types/models/movieInterface';
import { useEffect, useState } from 'react';
import useGetData from '../api/useGetData';

interface GetDetails {
  id: number;
}

export const useGetMovieDetails = ({ id }: GetDetails) => {
  const [movieDetails, setMovieDetails] = useState<MovieFull>();
  const { getData, isFetching } = useGetData();

  const getMovieDetails = async () => {
    const response = await getData({ path: `movie/${id}` });
    setMovieDetails(response);
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  return {
    isLoadingDetail: isFetching,
    movieDetails,
  };
};
