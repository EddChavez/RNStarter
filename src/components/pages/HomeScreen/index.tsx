/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { useNowPlayingMovies } from '@src/hooks/useNowPlayingMovies';
import CardMovie from '@molecules/CardMovie';
import { FlatList } from 'react-native';
import { MovieDescriptionType } from '@src/types/models/movieDescriptionInterface';

const HomeScreen = () => {
  const { nowPlayingMovies } = useNowPlayingMovies();

  const renderItem = ({ item }: { item: MovieDescriptionType }) => (
    <CardMovie movieDescription={item} />
  );

  return (
    <FlatList
      data={nowPlayingMovies}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      columnWrapperStyle={{
        justifyContent: 'space-evenly',
      }}
    />
  );
};

export default HomeScreen;
