import React from 'react';
import {
  TextInput, Dimensions, Image,
  View, Text, StyleSheet,
  ScrollView, TouchableOpacity,
} from 'react-native';
import { Button } from 'react-native-elements';
import { addCity, updateAsyncStorage } from '../../actions/citiesActions';
import { connect } from 'react-redux';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#52cc9d',
    justifyContent: 'center',
  },
  textInput: {
    height: 55,
    backgroundColor: 'white',
    marginHorizontal: 15,
    marginTop: 8,
    padding: 9
  },
  buttonTextContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginLeft: 20,
    marginRight: 20,
    marginTop: -25,
  },
  button: {
    width: 60,
  },
})

class SignIn extends React.Component {
  state = {
    input: {},
    isDisable: null,
  };
  updateInput = (key, value) => {
    this.setState({
      input: {
        ...this.state.input,
        [key]: value,
      }
    });
  }
  submit = () => {
    this.setState({
      isDisable: true,
    });
    const { navigate } = this.props.navigation;
    navigate('AppHome', { name: 'Jane' });
  }
  signUp = () => {
    const { navigate } = this.props.navigation;
    navigate('SignUp', { name: 'Jane' });
  }
  render() {
    let {state: {isDisable}} = this;
    return (
      <View style={styles.container}>
        <View>
          <ScrollView>
            <TextInput
              ref={email => this.nameRef = email}
              value={this.state.input['email']}
              onChangeText={(value) => this.updateInput('email', value)}
              style={styles.textInput}
              placeholder='Email address'
              autoCorrect={false}
              underlineColorAndroid='transparent'
            />
            <TextInput
              secureTextEntry
              ref={password => this.nameRef = password}
              value={this.state.input['password']}
              onChangeText={(value) => this.updateInput('password', value)}
              style={styles.textInput}
              placeholder='Password'
              autoCorrect={false}
              underlineColorAndroid='transparent'
            />
            <View style={styles.buttonTextContainer}>
              <TouchableOpacity style={styles.button} onPress={() => {}}>
                <Text style={{color: '#72c2d3', fontSize: 16}}>Forgot?</Text>
              </TouchableOpacity>
            </View>
            <Button
              disabled={isDisable}
              buttonStyle={{ marginTop: 8, height: 55 }}
              title='LOGIN'
              backgroundColor='#8e8e8e'
              onPress={() => this.submit()}
            />
          </ScrollView>
        </View>
        <View style={{alignItems: 'center', marginTop: 30}}>
          <View>
            <Text style={{color: '#fff'}}>Don't have an account?</Text>
          </View>
          <TouchableOpacity style={{marginTop: 10}} onPress={() => this.signUp()}>
            <Text style={{color: '#fff', fontSize: 20}}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchAddCity: (city) => dispatch(addCity(city)),
  dispatchUpdateAsyncStorage: () => dispatch(updateAsyncStorage()),
});

export default connect(null, mapDispatchToProps)(SignIn)
