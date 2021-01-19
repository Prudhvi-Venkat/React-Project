/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import styles from './assets/main-style'


export default class App extends React.Component {
  render() {
     return (
        <View style = {styles.container}>
           <Text>Open up App.js to start working on your app!</Text>
           <Text>Changes you make will automatically reload.</Text>
           <Text>Shake your phone to open the developer menu.</Text>
        </View>
     );
  }
}



