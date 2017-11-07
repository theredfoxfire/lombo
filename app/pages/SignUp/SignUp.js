import React from 'react';
import { TextInput, Dimensions, Image, View, Text, StyleSheet, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import { addCity, updateAsyncStorage } from '../../actions/citiesActions';
import { connect } from 'react-redux';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#52cc9d',
  },
  spacer: {
    marginTop: 100,
  },
  textInput: {
    height: 55,
    backgroundColor: 'white',
    marginHorizontal: 15,
    marginTop: 8,
    padding: 9
  }
})

class SignUp extends React.Component {
  state = {
    input: {}
  }
  updateInput = (key, value) => {
    this.setState({
      input: {
        ...this.state.input,
        [key]: value,
      }
    })
  }
  submit = () => {
    const { navigate } = this.props.navigation;
    navigate('AppHome', { name: 'Jane' });
    // if (!this.state.input['country'] || !this.state.input['name']) return
    // const { dispatchAddCity } = this.props;
    // dispatchAddCity(this.state.input)
    // this.setState({ input: {} }, () => {
    //   this.props.dispatchUpdateAsyncStorage();
    // })
    // this.nameRef.focus()
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
        <View style={styles.spacer} />
        <TextInput
          ref={name => this.nameRef = name}
          value={this.state.input['name']}
          onChangeText={(value) => this.updateInput('name', value)}
          style={styles.textInput}
          placeholder='Your name'
          autoCorrect={false}
          underlineColorAndroid='transparent'
        />
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
          ref={celphone => this.nameRef = celphone}
          value={this.state.input['celphone']}
          onChangeText={(value) => this.updateInput('celphone', value)}
          style={styles.textInput}
          placeholder='Your celphone number'
          autoCorrect={false}
          underlineColorAndroid='transparent'
        />
        <TextInput
          ref={password => this.nameRef = password}
          value={this.state.input['password']}
          onChangeText={(value) => this.updateInput('password', value)}
          style={styles.textInput}
          placeholder='Password'
          autoCorrect={false}
          underlineColorAndroid='transparent'
        />
        <TextInput
          value={this.state.input['repeatPassword']}
          onChangeText={(value) => this.updateInput('repeatPassword', value)}
          style={styles.textInput}
          placeholder='Repeat password'
          autoCorrect={false}
          underlineColorAndroid='transparent'
        />
        <Button
          buttonStyle={{ marginTop: 8, height: 55 }}
          title='CREATE ACCOUNT'
          backgroundColor='#8e8e8e'
          onPress={this.submit}
        />
      </ScrollView>
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchAddCity: (city) => dispatch(addCity(city)),
  dispatchUpdateAsyncStorage: () => dispatch(updateAsyncStorage()),
});

export default connect(null, mapDispatchToProps)(SignUp)
