import {createStackNavigator} from '@react-navigation/stack';
import BottomNavigator from './BottomNavigator';
import React from 'react';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MyTab"
        component={BottomNavigator}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
export default MyStack;
