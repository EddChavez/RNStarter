import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

interface Props {
  posterPath: string;
}

const Poster: React.FC<Props> = ({ posterPath }) => {
  const uri = `https://image.tmdb.org/t/p/w500${posterPath}`;
  return (
    <Image source={{ uri }} style={styles.posterImage} resizeMode="stretch" />
  );
};

const styles = StyleSheet.create({
  posterImage: {
    flex: 1,
  },
});

export default Poster;
