import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from '@ant-design/react-native';
import Home from './Home';
import User from './User';

const Tab = createBottomTabNavigator();

export default Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'User') {
            iconName = focused ? 'user' : 'user';
          }

          // You can return any component that you like here!
          return (
            <Icon
              name={iconName}
              size={'sm'}
              color={focused ? 'tomato' : 'gray'}
            />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name="Home"
        options={{
          title: '首页',
        }}
        component={Home}
      />
      <Tab.Screen
        name="User"
        options={{
          title: '我',
        }}
        component={User}
      />
    </Tab.Navigator>
  );
};
