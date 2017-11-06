import React from 'react';
import { Text, View, Image, StyleSheet, Dimensions } from 'react-native';

import { StackNavigator, TabNavigator } from 'react-navigation';

import HomeTab from './tabs/HomeTab/index';
import SignUp from './pages/SignUp/SignUp';
const { width } = Dimensions.get('window');
const TabStyleConfig = {
  tabBarPosition: 'bottom',
  tabBarOptions: {
    activeTintColor: '#52cc9d',
    inactiveTintColor: '#666',
    showIcon: true,
    indicatorStyle: {
      backgroundColor: '#666'
    },
    style: {
      backgroundColor: '#ffffff',
      borderTopWidth: 1,
      borderTopColor: '#ededed'
    },
  },
}
const TabConfig = {
  HomeTab: {
    screen: HomeTab,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('./assets/cityicon.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      )
    }
  }
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
