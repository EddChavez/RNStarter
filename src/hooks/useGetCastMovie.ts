import useGetData from '../api/useGetData';

interface GetCast {
  id: number;
}

export const useGetCastShow = ({ id }: GetCast) => {
  const { data, isFetching } = useGetData(`movie/${id}/credits`);

  return {
    isLoadingCast: isFetching,
    cast: data?.cast || [],
  };
};
