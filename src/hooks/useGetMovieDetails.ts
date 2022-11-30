import useGetData from '../api/useGetData';

interface GetDetails {
  id: number;
}

export const useGetMovieDetails = ({ id }: GetDetails) => {
  const { data, isFetching } = useGetData(`movie/${id}`);

  return {
    isLoadingDetail: isFetching,
    movieDetails: data || [],
  };
};
