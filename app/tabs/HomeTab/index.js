import React from 'react';
import { View, Text, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Main from './Main';

const RouteConfig = {
  Main: {
    screen: Main,
  },
};

const NavConfig = {
  headerMode: 'none',
};

export default StackNavigator(RouteConfig, NavConfig);
