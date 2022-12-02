import React from 'react';
import { useNowPlayingMovies } from '@src/hooks/useNowPlayingMovies';
import MovieList from '@templates/MovieList';

const HomeScreen = () => {
  const { nowPlayingMovies } = useNowPlayingMovies();
  return <MovieList data={nowPlayingMovies} />;
};

export default HomeScreen;
