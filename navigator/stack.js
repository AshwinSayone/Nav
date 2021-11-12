import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import tabNav from './tab';

const Stack = createStackNavigator();

function stackNav() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="tabNav" component={tabNav} />
    </Stack.Navigator>
  );
}
export default stackNav;
