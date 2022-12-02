import Poster from '@atoms/Poster';
import React from 'react';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
  onPress: () => void;
  posterPath: string;
}

const PosterLink: React.FC<Props> = ({ onPress, posterPath }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Poster posterPath={posterPath} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: 130,
    borderRadius: 10,
    margin: 5,
    overflow: 'scroll',
  },
});

export default PosterLink;
