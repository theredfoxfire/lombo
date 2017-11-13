import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Icon, Button, Card } from 'react-native-elements';

export default function appInfo(props: {}) {
  return (
    <View style={styles.infoContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.starContainer}>
          <Icon
            name='star'
            type='font-awesome'
            color='#fff'
          />
        </View>
        <View>
          <Text style={{fontSize: 22, marginLeft: 5}}>Youre are Lombo Starter!</Text>
        </View>
      </View>
      <View style={styles.messageContainer}>
        <Text>let you get unique 20% on xyz product all week! Thank you for being our customer.</Text>
      </View>
      <View style={styles.moreContainer}>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.moreText}>See your offers!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  messageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  starContainer: {
    height: 30,
    width: 30,
    backgroundColor: '#f0bb00',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  infoContainer: {
    marginTop: 9,
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderBottomColor: '#e4e4e4',
    borderBottomWidth: 1,
  },
  moreContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  button: {
    width: 120,
  },
  moreText: {
    color: '#72c2d3',
    fontSize: 16,
  },
})
