import React, { useEffect, useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@src/navigation/MainNavigator';
import { RouteProp } from '@react-navigation/core';
import { useGetFavoriteMovies } from '@src/hooks/useGetFavoriteMovies';
import MovieList from '@templates/MovieList';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList>;
  route: RouteProp<RootStackParamList, 'MovieDetailsScreen'>;
}

const FavoritesScreen: React.FC<Props> = ({ navigation }) => {
  const { getFavoriteMovies } = useGetFavoriteMovies();
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getFavoriteMovies().then((response) => setFavoriteMovies(response));
    });

    return unsubscribe;
  }, [navigation]);
  return <MovieList data={favoriteMovies} />;
};

export default FavoritesScreen;
