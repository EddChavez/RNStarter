import React from 'react';
import { View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@src/navigation/MainNavigator';
import { RouteProp } from '@react-navigation/core';
import Poster from '@atoms/Poster';
import MovieDescription from '@atoms/MovieDescription';
import { useGetMovieDetails } from '@src/hooks/useGetMovieDetails';
import { useGetCastShow } from '@src/hooks/useGetCastMovie';
import { MovieDetails } from '@molecules/MovieDetails';
import { ScrollView } from 'react-native-gesture-handler';
import { useGetSimilarMovies } from '@src/hooks/useGetSimilarMovies';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList>;
  route: RouteProp<RootStackParamList, 'MovieDetailsScreen'>;
}

const MovieDetailsScreen: React.FC<Props> = ({ route }) => {
  const { params } = route;
  const { movieDetails, isLoadingDetail } = useGetMovieDetails({
    id: params?.movieDescription.id,
  });

  const { cast, isLoadingCast } = useGetCastShow({
    id: params?.movieDescription.id,
  });

  const { similarMovies } = useGetSimilarMovies({
    id: params?.movieDescription.id,
  });

  return (
    <View style={{ flex: 1 }}>
      <Poster posterPath={params?.movieDescription?.poster_path} />
      <View style={{ height: 300 }}>
        <ScrollView>
          <MovieDescription
            title={params?.movieDescription.title}
            releaseDate={new Date(params?.movieDescription.release_date)}
            voteAverage={params?.movieDescription.vote_average}
            isViewDetails
          />
          <MovieDetails
            cast={cast}
            movieFull={movieDetails}
            isLoadingCast={isLoadingCast}
            isLoadingDetail={isLoadingDetail}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default MovieDetailsScreen;
