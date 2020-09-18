/*******************************************
 * 
 * Created by: Zachary Chin
 *
 * Last modified: September 12, 2020
 *
 * App.js takes a name and outputs the current age. 
 * This age is updated via a button, that when pressed, 
 * increments the age and appends an element containing 
 * the age to a list.
 *
 *******************************************/

import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList, TouchableOpacity } from 'react-native';

export default function App() {
  const [name, setName] = useState('');
  const [newAge, setAge] = useState(1);
  const [birthdays, addBirthday] = useState([]);

  const pressHandler = () => {
    setAge(newAge + 1);
    addBirthday(
      birthdays.concat({key: newAge.toString()})
    );
  }

  return (
    <View style={styles.container}>
      <Text style ={styles.text}>Enter name:</Text>
      <TextInput
        style={styles.input}
        placeholder='e.g. John Doe'
        onChangeText={(newName) => setName(newName)} />

      <Text>{name} is {newAge - 1} years old!</Text>

      <View style={styles.buttonContainer}>
        <Button title='Birthday!' onPress={pressHandler}/>
      </View>

      <FlatList
        contentContainerStyle={styles.bdayList}
        data={birthdays}
        renderItem={({ item }) => (
          <Text style={styles.age}>{item.key}</Text>
        )}
      />


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d3d3d3',
    // paddingTop: 40,
    // paddingHorizontal: 20
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    marginTop: 24,
    fontWeight: 'bold'
  },
  buttonContainer: {
    marginTop: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    backgroundColor: '#fff',
    padding: 8,
    margin: 10,
    width: 200
  },
  bdayList: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#f0fff0'
  },
  age: {
    marginTop: 10,
    padding: 10,
    width: 240,
    backgroundColor: '#add8e6',
    fontSize: 20,
    textAlign: 'center'
  }
});
