import { useEffect, useState } from 'react';
import useGetData from '../api/useGetData';

export const useNowPlayingMovies = () => {
  const { getData, isFetching } = useGetData();
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);

  const getNowPlayingMovies = async () => {
    const { results } = await getData({ path: 'movie/now_playing' });

    const nowPlayingMoviesSorted = results.sort((a: any, b: any) => {
      if (a.title > b.title) return 1;
      if (a.title < b.title) return -1;
      return 0;
    });

    setNowPlayingMovies(nowPlayingMoviesSorted);
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  return {
    isLoadingNowPlayingMovies: isFetching,
    nowPlayingMovies: nowPlayingMovies || [],
  };
};
