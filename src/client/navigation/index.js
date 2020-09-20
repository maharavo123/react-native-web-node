import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from '../screens/home';
import Audit from '../screens/contact';
import Dossiers from '../screens/folders';
import Comptes from '../screens/comptes';
import Headers from '../components/headers';

import images from 'images';
import { Image } from 'react-native';

const Tab = createBottomTabNavigator();

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        header: props => <Headers {...props} />
      }}
    >
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  );
}

const App = () => (
  <NavigationContainer>
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#2C7AC3',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Audit"
        component={Audit}
        options={{
          tabBarLabel: 'Audit',
          tabBarIcon: ({ color, size }) => (
            <Image
              source={images.audit}
              style={{ width: size, height: size }}
            />
          ),
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Dossiers"
        component={Dossiers}
        options={{
          tabBarLabel: 'Dossiers',
          tabBarIcon: ({ color, size }) => (
            <Image
              source={images.files}
              style={{ width: size, height: size }}
            />
          ),
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Comptes"
        component={Comptes}
        options={{
          tabBarLabel: 'Comptes',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  </NavigationContainer>
);

export default App;
