import React from 'react';
import Poster from '@atoms/Poster';
import { TouchableOpacity, View } from 'react-native';
import MovieDescription from '@atoms/MovieDescription';
import { useNavigation } from '@react-navigation/core';
import { MovieDescriptionType } from '@src/types/models/movieDescriptionInterface';

interface Props {
  movieDescription: MovieDescriptionType;
  height?: number;
  width?: number;
}

const CardMovie: React.FC<Props> = ({
  movieDescription,
  height = 380,
  width = '45%',
}) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        height,
        width,
        backgroundColor: 'white',
        marginVertical: 5,
        borderRadius: 20,
        overflow: 'hidden',
      }}
    >
      <TouchableOpacity
        style={{ flex: 1 }}
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
    </View>
  );
};

export default CardMovie;
