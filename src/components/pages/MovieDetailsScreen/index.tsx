import React from 'react';
import { StyleSheet, View } from 'react-native';
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
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ActionButton from '@atoms/ActionButton';
import Carousel from '@organisms/Carousel';
import PosterLink from '@molecules/PosterLink';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList>;
  route: RouteProp<RootStackParamList, 'MovieDetailsScreen'>;
}

const MovieDetailsScreen: React.FC<Props> = ({ route, navigation }) => {
  const { id, poster_path, title, release_date, vote_average } =
    route.params.movieDescription;
  const { movieDetails, isLoadingDetail } = useGetMovieDetails({ id });

  const { cast, isLoadingCast } = useGetCastShow({ id });

  const { similarMovies } = useGetSimilarMovies({ id });

  const { accountStates, rateMovie, fetchingRate, toggleFavoriteMovie } =
    useGetAccountStates({
      id,
    });

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.posterContainer}>
          <Poster posterPath={poster_path} />
        </View>
        <View style={styles.descriptionContent}>
          <MovieDescription
            title={title}
            releaseDate={new Date(release_date)}
            voteAverage={vote_average}
            isViewDetails
          />
          <ActionButton
            onPress={() =>
              toggleFavoriteMovie({
                movieId: id,
                isFavorite: !accountStates?.favorite,
              })
            }
            icon={
              <Icon
                name={
                  accountStates?.favorite
                    ? 'cards-heart'
                    : 'cards-heart-outline'
                }
                size={50}
                color="red"
              />
            }
          />
        </View>
        <Rating
          startingValue={accountStates?.rated?.value || 0}
          ratingCount={10}
          imageSize={25}
          jumpValue={1}
          readonly={fetchingRate}
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
        <Carousel
          data={similarMovies}
          title="Peliculas similares"
          renderItem={({ item }) => (
            <PosterLink
              onPress={() =>
                navigation.navigate('MovieDetailsScreen', {
                  movieDescription: item,
                })
              }
              posterPath={item?.poster_path}
            />
          )}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  posterContainer: {
    height: 500,
    margin: 20,
    borderRadius: 20,
    overflow: 'scroll',
  },
  descriptionContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingRight: 20,
  },
});

export default MovieDetailsScreen;
