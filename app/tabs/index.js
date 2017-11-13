import React from 'react';
import { Text, View, Image, StyleSheet, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';

import { StackNavigator, TabNavigator } from 'react-navigation';

import HomeTab from './HomeTab';
import LocationTab from './LocationTab';
import HistoryTab from './HistoryTab';
import SettingTab from './SettingTab';

const { width } = Dimensions.get('window');
const TabStyleConfig = {
  tabBarPosition: 'bottom',
  tabBarOptions: {
    activeTintColor: '#52cc9d',
    inactiveTintColor: '#666',
    showIcon: true,
    indicatorStyle: {
      backgroundColor: '#52cc9d',
    },
    style: {
      backgroundColor: '#ffffff',
      borderTopWidth: 1,
      borderTopColor: '#ededed',
    },
  },
};
const TabConfig = {
  HomeTab: {
    screen: HomeTab,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name='home'
          type='font-awesome'
          color={tintColor}
          size={28}
        />
      )
    }
  },
  LocationTab: {
    screen: LocationTab,
    navigationOptions: {
      tabBarLabel: 'Place',
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name='map-marker'
          type='font-awesome'
          color={tintColor}
          size={28}
        />
      )
    }
  },
  HistoryTab: {
    screen: HistoryTab,
    navigationOptions: {
      tabBarLabel: 'History',
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name='history'
          type='font-awesome'
          color={tintColor}
          size={28}
        />
      )
    }
  },
  SettingTab: {
    screen: SettingTab,
    navigationOptions: {
      tabBarLabel: 'Setting',
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name='gear'
          type='font-awesome'
          color={tintColor}
          size={28}
        />
      )
    }
  },
};
const AppHome = TabNavigator(TabConfig, TabStyleConfig);
export default AppHome;
