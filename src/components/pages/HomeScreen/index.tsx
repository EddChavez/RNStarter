/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { useNowPlayingMovies } from '@src/hooks/useNowPlayingMovies';
import CardMovie from '@molecules/CardMovie';
import { FlatList } from 'react-native';

const HomeScreen = () => {
  const { nowPlayingMovies, isLoadingNowPlayingMovies } = useNowPlayingMovies();

  const renderItem = ({ item }: any) => (
    <CardMovie
      posterPath={item.poster_path}
      title={item.title}
      releaseDate={new Date(item.release_date)}
    />
  );

  return (
    <FlatList
      data={nowPlayingMovies}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      numColumns={2}
      columnWrapperStyle={{
        justifyContent: 'space-evenly',
      }}
    />
  );
};

export default HomeScreen;
