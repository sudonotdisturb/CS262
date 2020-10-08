import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, ActivityIndicator, FlatList, Text, View, Image } from 'react-native';
import Card from './shared/card';

export default function App() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://www.googleapis.com/books/v1/volumes?q=jane%20austen')
      .then((response) => response.json())
      .then((json) => {
        setData(json.items);
        console.log(data);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Card>
              <Text style={styles.cardTitle}> { item.volumeInfo.title } </Text>
              <Image
                style={styles.thumbnail}
                source={{ uri: item.volumeInfo.imageLinks.thumbnail }}
              />
              <Text style={styles.cardInfo}> 
                {'\n'}
                Written By: { item.volumeInfo.authors[0] } {"\n"}
                ISBN: {item.volumeInfo.industryIdentifiers[0].identifier }
              </Text>
            </Card>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#eee',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  cardTitle: {
    marginHorizontal: 18,
    marginVertical: 20,
    fontWeight: 'bold',
  },
  cardInfo: {
    marginHorizontal: 18,
    marginVertical: 20,
  },
  thumbnail: {
    width: 200,
    height: 300,
  }
});
