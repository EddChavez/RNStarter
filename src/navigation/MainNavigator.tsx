import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Text, View} from 'react-native';
import {useTranslation} from 'react-i18next';

const Drawer = createDrawerNavigator();

const HomeScreen = () => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

const OAuth2SampleScreen = () => {
  return (
    <View>
      <Text>OAuth2Sample</Text>
    </View>
  );
};

const APISampleScreen = () => {
  return (
    <View>
      <Text>APISample</Text>
    </View>
  );
};

const MainNavigator = () => {
  const {t} = useTranslation();
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen
            name="Home"
            options={{
              title: t('screens.home.title'),
              //   drawerIcon: ({size, color}) => (
              //     <Icon name="home" size={size} color={color} />
              //   ),
            }}
            component={HomeScreen}
          />
          <Drawer.Screen
            name="OAuth2Sample"
            options={{
              title: t('screens.oauth2sample.title'),
              //   drawerIcon: ({size, color}) => (
              //     <Icon name="security" size={size} color={color} />
              //   ),
            }}
            component={OAuth2SampleScreen}
          />
          <Drawer.Screen
            name="APISample"
            options={{
              title: t('screens.apisample.title'),
              //   drawerIcon: ({size, color}) => (
              //     <Icon name="telescope" size={size} color={color} />
              //   ),
            }}
            component={APISampleScreen}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default MainNavigator;
