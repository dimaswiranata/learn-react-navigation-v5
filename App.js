import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './src/pages/HomeScreen';
import DetailScreen from './src/pages/DetailScreen';
import ExploreScreen from './src/pages/ExploreScreen';
import ProfileScreen from './src/pages/ProfileScreen';
import SupportScreen from './src/pages/SupportScreen';
import BookmarkScreen from './src/pages/BookmarkScreen';
import SettingsScreen from './src/pages/SettingsScreen';
import { DrawerContent } from './src/pages/DrawerContent';

const HomeStack = createStackNavigator();
const DetailStack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createMaterialBottomTabNavigator();

function TabRouter() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
    >
      <Tab.Screen
        name="Home"
        component={HomeStackRouter}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#009387',
          tabBarIcon: ({ color }) => (
            <Icon name="md-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={DetailStackRouter}
        options={{
          tabBarLabel: 'Notification',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({ color }) => (
            <Icon name="md-notifications" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          title: 'Explore',
          tabBarLabel: 'Explore',
          tabBarColor: '#694fad',
          tabBarIcon: ({ color }) => (
            <Icon name="md-aperture" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: '#d02860',
          tabBarIcon: ({ color }) => (
            <Icon name="md-person" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

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
          backgroundColor: '#1f65ff'
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
              backgroundColor='#1f65ff'
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
    <Drawer.Navigator 
      initialRouteName='HomeDrawer'
      drawerContent={props => <DrawerContent {...props}/>}
    >
      <Drawer.Screen
        name="HomeDrawer"
        component={TabRouter}
      />
      <Drawer.Screen
        name="Support"
        component={SupportScreen}
      />
      <Drawer.Screen
        name="Bookmarks"
        component={BookmarkScreen}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
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
