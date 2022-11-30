import useGetData from '../api/useGetData';

interface GetDetails {
  id: number;
}

export const useGetSimilarMovies = ({ id }: GetDetails) => {
  const { data, isFetching } = useGetData(`movie/${id}/similar`);

  return {
    isLoadingSimilarMovies: isFetching,
    similarMovies: data || [],
  };
};
