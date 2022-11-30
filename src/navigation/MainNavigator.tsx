import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FavoritesScreen from '@pages/FavoritesScreen';
import HomeScreen from '@pages/HomeScreen';
import MovieDetailsScreen from '@pages/MovieDetailsScreen';
import { MovieDescriptionType } from '@src/types/models/movieDescriptionInterface';

const Drawer = createDrawerNavigator();
const { Navigator, Screen } = createNativeStackNavigator();

export type RootStackParamList = {
  HomeScreen: undefined;
  FavoritesScreen: undefined;
  MovieDetailsScreen: {
    movieDescription: MovieDescriptionType;
  };
};

const MainNavigator = () => {
  const { t } = useTranslation();

  const RootNavigator = () => (
    <Drawer.Navigator>
      <Drawer.Screen
        name="HomeScreen"
        options={{
          title: t('screens.home.title'),
          drawerIcon: ({ size, color }) => (
            <Icon name="movie" size={size} color={color} />
          ),
        }}
        component={HomeScreen}
      />
      <Drawer.Screen
        name="FavoritesScreen"
        options={{
          title: t('screens.favorites.title'),
          drawerIcon: ({ size, color }) => (
            <Icon name="heart" size={size} color={color} />
          ),
        }}
        component={FavoritesScreen}
      />
    </Drawer.Navigator>
  );

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Navigator>
          <Screen
            name="Root"
            component={RootNavigator}
            options={{ headerShown: false }}
          />
          <Screen name="MovieDetailsScreen" component={MovieDetailsScreen} />
        </Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default MainNavigator;
