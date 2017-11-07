import React from 'react';
import { View, Text, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Main from './Main';
import City from './City';

const RouteConfig = {
  Main: {
    screen: Main,
  },
  City: {
    screen: City,
  }
};

const NavConfig = {
  headerMode: 'none',
};

export default StackNavigator(RouteConfig, NavConfig);
