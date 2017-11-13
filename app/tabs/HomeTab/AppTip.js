import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Icon, Button, Card } from 'react-native-elements';

export default function appTip(props: {}) {
  return (
    <View style={styles.infoContainer}>
      <View style={styles.messageContainer}>
        <Text style={{color: '#f0bb00', flex: 0.1}}>Tip: </Text>
        <View style={styles.textMessageContainer}>
          <Text style={styles.textMessage}>
            20 AED more and you will get Lombo Plus that offers higher discounts and
            more point for change you choose to use with us.
          </Text>
          <View style={styles.moreContainer}>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
              <Text style={styles.moreText}>See your offers!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  messageContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
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
    justifyContent: 'center',
  },
  button: {
    width: 120,
  },
  textMessageContainer: {
    flex: 0.9,
  },
  textMessage: {
    textAlign: 'center',
  },
  moreText: {
    color: '#72c2d3',
    fontSize: 16,
  },
})
