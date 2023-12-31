import React, { useState } from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import WebViewComponent from './WebViewComponent';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen name="WebView" component={WebViewComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
