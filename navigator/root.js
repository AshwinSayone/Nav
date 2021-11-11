import React from 'react';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from '../module/home';
import About from '../module/about';
import Contact from '../module/contact';
import Homecopy from '../module/home copy';

const Drawer = createDrawerNavigator();
const Tab = createMaterialBottomTabNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="Contact" component={Contact} />
    </Drawer.Navigator>
  );
}

function Root() {
  return (
    <Tab.Navigator initialRouteName="Home" activeColor="#fff">
      <Tab.Screen
        name=" "
        component={MyDrawer}
        options={{
          tabBarColor: '#1f65ff',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="forwardburger"
              color={color}
              size={25}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={25} />
          ),
        }}
      />

      <Tab.Screen
        name="About"
        component={About}
        options={{
          tabBarLabel: 'Cart',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" color={color} size={25} />
          ),
        }}
      />

      <Tab.Screen
        name="Contact"
        component={Contact}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" color={color} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Root;
