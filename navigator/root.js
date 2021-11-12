import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {TouchableOpacity, Image, View, Text} from 'react-native';
import Stack from '../navigator/stack';
import About from '../module/about';
import Contact from '../module/contact';
import Notification from '../asset/noti.png';
import Message from '../asset/message.png';
const Drawer = createDrawerNavigator();

function Root() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitle: () => <Text>DOGS</Text>,
        headerRight: () => (
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => {
                alert('This is a button.');
              }}>
              <Image
                source={Notification}
                style={{width: 30, height: 30, margin: 10}}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                alert('This is a button.');
              }}>
              <Image
                source={Message}
                style={{width: 30, height: 30, margin: 10}}
              />
            </TouchableOpacity>
          </View>
        ),
      }}>
      <Drawer.Screen name="Stack" component={Stack} />
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="Contact" component={Contact} />
    </Drawer.Navigator>
  );
}

export default Root;
