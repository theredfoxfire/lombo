import React from 'react';
import { Text, View, Image, StyleSheet, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';

import { StackNavigator, TabNavigator } from 'react-navigation';

import HomeTab from './tabs/HomeTab/index';
import LocationTab from './tabs/LocationTab/index';
import HistoryTab from './tabs/HistoryTab/index';
import SettingTab from './tabs/SettingTab/index';

import SignUp from './pages/SignUp/SignUp';
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
}
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
}
const AppHome = TabNavigator(TabConfig, TabStyleConfig);

const styles = StyleSheet.create({
  icon: {
    width: 28,
    height: 28
  },
  logo: {
    height: 42,
    width: width,
    alignItems: 'center'
  },
});

const stackNav = StackNavigator({
    SingUp: {
        screen: SignUp,
        navigationOptions:({navigation}) => ({
          headerStyle: {backgroundColor: '#a3e6ce'},
          headerTitle: <Image
            resizeMode='contain'
            style={styles.logo}
            source={require('./assets/lomboapp.png')}
          />,
        })
    },
    AppHome: {
      screen: AppHome,
      navigationOptions: (props) => ({
        headerStyle: {backgroundColor: '#a3e6ce'},
        headerTitle: <Image
          resizeMode='contain'
          style={[styles.logo, {marginLeft: -30}]}
          source={require('./assets/lomboapp.png')}
        />,
      })
    }
}, {
  headerMode: 'screen',
})
export default stackNav;
