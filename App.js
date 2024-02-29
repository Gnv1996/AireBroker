import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MyStack from './src/Navigator/StackNavigator';

function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

export default App;
