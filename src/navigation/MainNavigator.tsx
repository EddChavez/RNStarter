import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '@pages/HomeScreen';
import FavoritesScreen from '@pages/FavoritesScreen';

const Drawer = createDrawerNavigator();

const MainNavigator = () => {
  const { t } = useTranslation();
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen
            name="Home"
            options={{
              title: t('screens.home.title'),
              drawerIcon: ({ size, color }) => (
                <Icon name="movie" size={size} color={color} />
              ),
            }}
            component={HomeScreen}
          />
          <Drawer.Screen
            name="APISample"
            options={{
              title: t('screens.favorites.title'),
              drawerIcon: ({ size, color }) => (
                <Icon name="heart" size={size} color={color} />
              ),
            }}
            component={FavoritesScreen}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default MainNavigator;
