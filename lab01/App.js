/*******************************************
 * 
 * Created by: Zachary Chin
 *
 * Last modified: September 4, 2020
 *
 * App.js displays text on the screen.
 *
 *******************************************/

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello, Expo! Hello, Professor Vander Linden!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
