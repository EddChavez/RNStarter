import useGetData from '../api/useGetData';

export const useNowPlayingMovies = () => {
  const { data, isFetching } = useGetData('movie/now_playing');

  const nowPlayingMovies = data?.results.sort(
    (a: any, b: any) => a.title > b.title
  );

  return {
    isLoadingNowPlayingMovies: isFetching,
    nowPlayingMovies: nowPlayingMovies || [],
  };
};
