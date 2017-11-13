import React from 'react';
import { Text, View, Image, StyleSheet, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';

import { StackNavigator, TabNavigator } from 'react-navigation';

import AppHome from './tabs';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

const { width } = Dimensions.get('window');


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
    SingIn: {
        screen: SignIn,
        navigationOptions:({navigation}) => ({
          headerStyle: {backgroundColor: '#a3e6ce'},
          headerTitle: <Image
            resizeMode='contain'
            style={styles.logo}
            source={require('./assets/lomboapp.png')}
          />,
        })
    },
    SignUp: {
        screen: SignUp,
        navigationOptions:({navigation}) => ({
          headerStyle: {backgroundColor: '#a3e6ce'},
          headerTitle: <Image
            resizeMode='contain'
            style={[styles.logo, {marginLeft: -30}]}
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
