import React, { useEffect, useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@src/navigation/MainNavigator';
import { RouteProp } from '@react-navigation/core';
import CardMovie from '@molecules/CardMovie';
import { useGetFavoriteMovies } from '@src/hooks/useGetFavoriteMovies';
import { MovieDescriptionType } from '@src/types/models/movieDescriptionInterface';
import { FlatList } from 'react-native';

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

  const renderItem = ({ item }: { item: MovieDescriptionType }) => (
    <CardMovie movieDescription={item} />
  );

  return (
    <FlatList
      data={favoriteMovies}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      columnWrapperStyle={{
        justifyContent: 'space-evenly',
      }}
    />
  );
};

export default FavoritesScreen;
