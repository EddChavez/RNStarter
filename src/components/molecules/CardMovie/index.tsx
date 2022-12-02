import React from 'react';
import Poster from '@atoms/Poster';
import { Dimensions, StyleSheet, TouchableOpacity, View } from 'react-native';
import MovieDescription from '@atoms/MovieDescription';
import { useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@src/navigation/MainNavigator';
import { MovieDescriptionType } from '@src/types/models/movieDescriptionInterface';

interface Props {
  movieDescription: MovieDescriptionType;
  height?: number;
  width?: number;
}

const { width: windowWidth } = Dimensions.get('window');

const CardMovie: React.FC<Props> = ({
  movieDescription,
  height = 380,
  width = windowWidth * 0.45,
}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <TouchableOpacity
      style={touchableOpacityStyle({ height, width })}
      onPress={() => {
        navigation.navigate('MovieDetailsScreen', {
          movieDescription: movieDescription,
        });
      }}
    >
      <Poster posterPath={movieDescription.poster_path} />
      <MovieDescription
        title={movieDescription.title}
        releaseDate={new Date(movieDescription.release_date)}
        voteAverage={movieDescription.vote_average}
      />
    </TouchableOpacity>
  );
};

const touchableOpacityStyle = ({
  height,
  width,
}: Pick<Props, 'width' | 'height'>) =>
  StyleSheet.create({
    style: {
      height,
      width,
      marginVertical: 10,
      borderRadius: 20,
      overflow: 'scroll',
    },
  }).style;

export default CardMovie;
