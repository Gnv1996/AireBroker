import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screen/HomeScreen';
import ChatScreen from '../screen/ChatScreen';
import ServiceScreen from '../screen/ServiceScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import GoogleAuth from '../auth/GoogleAuth';

const Tab = createBottomTabNavigator();

function BottomNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon name="home-outline" color="#f15a28" size={30} />
          ),
        }}
      />

      <Tab.Screen
        name="chat"
        component={ChatScreen}
        options={{
          tabBarLabel: 'chat',
          tabBarIcon: ({color, size}) => (
            <Icon
              name="chatbubble-ellipses-outline"
              color="#2a3515"
              size={size}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Service"
        component={ServiceScreen}
        options={{
          tabBarLabel: 'Setting',
          tabBarIcon: ({color, size}) => (
            <Icon name="settings-outline" color="#2a3515" size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Auth"
        component={GoogleAuth}
        options={{
          tabBarLabel: 'Sign out',
          tabBarIcon: ({color, size}) => (
            <Icon name="log-out-outline" color="#2a3515" size={size} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
export default BottomNavigator;
