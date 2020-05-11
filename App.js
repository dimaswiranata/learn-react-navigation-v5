import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './src/pages/HomeScreen';
import DetailScreen from './src/pages/DetailScreen';

const HomeStack = createStackNavigator();
const DetailStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackRouter = ({navigation}) => {
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#009387'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}
    >
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Overview',
          headerLeft: () => (
            <Icon.Button 
              name='md-menu' 
              size={25}
              backgroundColor='#009387'
              onPress={() => navigation.openDrawer()}
            />
          )
        }}
      />
    </HomeStack.Navigator>
  );
}

const DetailStackRouter = ({ navigation }) => {
  return (
    <DetailStack.Navigator
      initialRouteName="Detail"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#009387'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}
    >
      <DetailStack.Screen
        name="Detail"
        component={DetailScreen}
        options={{
          title: 'Details',
          headerLeft: () => (
            <Icon.Button 
              name='md-menu' 
              size={25}
              backgroundColor='#009387'
              onPress={() => navigation.openDrawer()}
            />
          )
        }}
      />
    </DetailStack.Navigator>
  );
}

function DrawerRouter() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={HomeStackRouter}
      />
      <Drawer.Screen
        name="Detail"
        component={DetailStackRouter}
      />
    </Drawer.Navigator>
  );
}

function App () {
  return (
    <NavigationContainer>
      <DrawerRouter/>
    </NavigationContainer>
  );
};

export default App;
