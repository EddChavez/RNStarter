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
import { ToastProvider } from 'react-native-toast-notifications';

import MainNavigator from '@src/navigation/MainNavigator';

const App = () => (
  <ToastProvider>
    <MainNavigator />
  </ToastProvider>
);

export default App;
