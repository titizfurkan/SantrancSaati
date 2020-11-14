import React from 'react';
import { StyleSheet, View } from 'react-native';
import {StatusBar} from 'react-native'
import BlackClock from './src/clocks'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />  
        <BlackClock/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: 'white'
  }
});
