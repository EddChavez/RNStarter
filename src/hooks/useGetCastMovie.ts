import { useEffect, useState } from 'react';
import useGetData from '../api/useGetData';

interface GetCast {
  id: number;
}

export const useGetCastShow = ({ id }: GetCast) => {
  const [cast, setCast] = useState([]);
  const { getData, isFetching } = useGetData();

  const getCastMovie = async () => {
    const { cast } = await getData({ path: `movie/${id}/credits` });
    setCast(cast);
  };

  useEffect(() => {
    getCastMovie();
  }, []);

  return {
    isLoadingCast: isFetching,
    cast,
  };
};
