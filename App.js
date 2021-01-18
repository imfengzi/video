import 'react-native-gesture-handler';
import * as React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {Button} from 'react-native';

import Tabs from './pages/Tabs';

import Setting from './pages/Setting';
import Test from './pages/Test';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Tabs}
          options={({route}) => {
            console.log('options');
            return {
              headerRight: () => {
                // console.log('options11111');
                const name = getFocusedRouteNameFromRoute(route) ?? 'Home';
                if (name === 'Home') {
                  return (
                    <Button
                      onPress={() => alert('This is a button!')}
                      title={'切换'}
                      color="#000"
                    />
                  );
                } else {
                  return <></>;
                }
              },
            };
          }}
        />
        <Stack.Screen name="Test" component={Test} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
