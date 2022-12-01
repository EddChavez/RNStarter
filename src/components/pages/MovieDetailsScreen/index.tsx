import React from 'react';
import { FlatList, Text, View } from 'react-native';
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
import { Rating } from 'react-native-ratings';
import { useGetAccountStates } from '@src/hooks/useGetAccountStates';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList>;
  route: RouteProp<RootStackParamList, 'MovieDetailsScreen'>;
}

const MovieDetailsScreen: React.FC<Props> = ({ route }) => {
  const { id, poster_path, title, release_date, vote_average } =
    route.params.movieDescription;
  const { movieDetails, isLoadingDetail } = useGetMovieDetails({ id });

  const { cast, isLoadingCast } = useGetCastShow({ id });

  const { similarMovies } = useGetSimilarMovies({ id });

  const { accountStates, rateMovie } = useGetAccountStates({ id });

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView>
        <View
          style={{
            height: 500,
            margin: 20,
            borderRadius: 20,
            overflow: 'scroll',
          }}
        >
          <Poster posterPath={poster_path} />
        </View>
        <MovieDescription
          title={title}
          releaseDate={new Date(release_date)}
          voteAverage={vote_average}
          isViewDetails
        />
        <Rating
          startingValue={accountStates?.rated?.value || 0}
          ratingCount={10}
          imageSize={25}
          jumpValue={1}
          // readonly
          style={{ paddingBottom: 15 }}
          onFinishRating={(value: number) =>
            rateMovie({ movieId: id, rateMovie: value })
          }
        />
        <MovieDetails
          cast={cast}
          movieFull={movieDetails}
          isLoadingCast={isLoadingCast}
          isLoadingDetail={isLoadingDetail}
        />
        <Text>Peliculas similares</Text>
        <FlatList
          data={similarMovies}
          keyExtractor={(item: any, index) => item.id.toString() + index}
          renderItem={({ item }) => (
            <View
              style={{
                height: 200,
                width: 130,
                borderRadius: 10,
                margin: 5,
                overflow: 'scroll',
              }}
            >
              <Poster posterPath={item.poster_path} />
            </View>
          )}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{ marginLeft: 20, marginBottom: 20 }}
        />
      </ScrollView>
    </View>
  );
};

export default MovieDetailsScreen;
