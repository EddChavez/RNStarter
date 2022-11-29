/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux';
import store, {persistor} from './store';
import MainNavigator from '@src/navigation/MainNavigator';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <MainNavigator />
    </PersistGate>
  </Provider>
);

export default App;
