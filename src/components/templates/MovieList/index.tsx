import CardMovie from '@molecules/CardMovie';
import { MovieDescriptionType } from '@src/types/models/movieDescriptionInterface';
import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

interface Props {
  data: MovieDescriptionType[];
}

const MovieList: React.FC<Props> = ({ data }) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <CardMovie movieDescription={item} />}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      columnWrapperStyle={styles.columnWrapperStyle}
    />
  );
};

const styles = StyleSheet.create({
  columnWrapperStyle: {
    justifyContent: 'space-evenly',
  },
});

export default MovieList;
