import React from 'react';
import { AppState, AsyncStorage, Image, ScrollView, View, Text, TextInput, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { ListItem, Button, Icon } from 'react-native-elements';
import { updateFromStorage } from '../../actions/citiesActions';

import { KEY } from '../../constants';
import PropTypes from 'prop-types';
const { width } = Dimensions.get('window');

class MainTab extends React.Component {
  static contextTypes = {
    store: PropTypes.object.isRequired
  };
  componentDidMount() {
    const { dispatchUpdateFromStorage } = this.props;
    AsyncStorage.getItem(KEY)
      .then(data => {
        console.log('data: ', JSON.parse(data));
        if (!data) return;
        const cities = JSON.parse(data);
        dispatchUpdateFromStorage(cities.citiesReducer)
      })
      .catch(err => {
        console.log('error in cities componentDidMount')
        console.log('err :', err)
      })
  }
  render() {
    const { navigation } = this.props;
    const cities = Object.values(this.props.cities);
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <Text>HistoryTab</Text>
        <ListItem
          roundAvatar
          key='rewtyuwb'
          containerStyle={{ borderBottomColor: '#e5e5e5', height: 100, justifyContent: 'center' }}
          title='Wellcome Ann!'
          titleStyle={{fontWeight: 'bold'}}
          avatar={require('../../assets/avatar.jpg')}
          chevronColor='#fff'
          subtitle='Try cashless payments with us once you have balance from your change'
          subtitleNumberOfLines={4}
        />
        <View style={{backgroundColor: '#e3e5e4', height: 75, justifyContent: 'center', alignItems: 'center'}}>
          <View style={{height: 40, backgroundColor:'#fff', borderColor: '#dddddd', paddingRight: -20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius: 20, width: 0.85 * width}}>
            <TextInput
              value=''
              onChangeText={() => {}}
              style={{height: 40, width: 0.65 * width, marginLeft: 27}}
              placeholder='What do you want to buy today?'
              autoCorrect={false}
              underlineColorAndroid='transparent'
            />
            <Button
              title='GO'
              buttonStyle={{width: 50, backgroundColor: '#007c27', borderRadius: 20}}
            />
          </View>
        </View>
        <View style={{flexDirection: 'row', height: 50, padding: 10}}>
          <Icon
            name='star'
            type='font-awesome'
            color='#eaed91'
          />
          <Text style={{marginLeft: 5, marginTop: 5}}>Your favorite places</Text>
        </View>
        <ScrollView style={{padding: 10}}>
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#f3f3f3', padding: 10, borderRadius: 10, margin: 5, height: 200, width: 200}}>
              <Image
                source={require('../../assets/bob.png')}
                style={{width: 170, height: 170}}
              />
              <Text>Bobi's supermarket</Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#f3f3f3', padding: 10, borderRadius: 10, margin: 5, height: 200, width: 200}}>
              <Image
                source={require('../../assets/papi.png')}
                style={{width: 170, height: 170}}
              />
              <Text>Papi's Beaf & Meat</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#f3f3f3', padding: 10, borderRadius: 10, margin: 5, height: 200, width: 200}}>
              <Image
                source={require('../../assets/papi.png')}
                style={{width: 170, height: 170}}
              />
              <Text>Papi's Beaf & Meat</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f3f3f3', padding: 10, borderRadius: 10, margin: 5, height: 200, width: 200}}>
              <Icon
                name='plus'
                type='font-awesome'
                color='#74ccdc'
                size={14}
              />
              <Text style={{color: '#74ccdc', marginLeft: 3}}>Add more item</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  cities: state.citiesReducer.cities,
})

const mapDispatchToProps = (dispatch) => ({
  dispatchUpdateFromStorage: (cities) => dispatch(updateFromStorage(cities))
})

export default connect(mapStateToProps, mapDispatchToProps)(MainTab)
