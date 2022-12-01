import { useEffect, useState } from 'react';
import useGetData from '../api/useGetData';

interface GetDetails {
  id: number;
}

export const useGetSimilarMovies = ({ id }: GetDetails) => {
  const [similarMovies, setSimilarMovies] = useState([]);
  const { getData, isFetching } = useGetData();

  const getSimilarMovies = async () => {
    const { results } = await getData({ path: `movie/${id}/similar` });
    setSimilarMovies(results);
  };

  useEffect(() => {
    getSimilarMovies();
  }, [id]);

  return {
    isLoadingSimilarMovies: isFetching,
    similarMovies,
  };
};
