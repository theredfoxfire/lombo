import React from 'react';
import { View, Text, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Cities from './Cities';
import City from './City';

const RouteConfig = {
  Cities: {
    screen: Cities,
  },
  City: {
    screen: City,
  }
};

const NavConfig = {
  headerMode: 'none',
};

export default StackNavigator(RouteConfig, NavConfig);
