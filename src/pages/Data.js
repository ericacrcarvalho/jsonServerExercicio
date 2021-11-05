import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, FlatList, Button } from 'react-native';
import { URL } from '../server/constants';

const Data = ({ navigation }) => {

  const [isLoading, setIsLoading] = useState(true);
  const [contacts, setContacts] = useState([]);

  const getData = async () => {
      try {
        const response = await fetch(`${URL}/contacts`);
        const json = await response.json();
        setContacts(json);

      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
  }
  useEffect(() => {
    getData();
  }, [])

  return (
    <View>
        <Text style={{fontSize: 26, textAlign: 'center', fontWeight: 'bold', margin: 28}}>Data</Text>
        {isLoading ? <ActivityIndicator/> : (
          <FlatList
            data={contacts}
            keyExtractor={({ id }) => id.toString()}
            renderItem={({ item }) => (
              <Text>{item.name}, {item.age}</Text>
            )}
          />
        )}
        <Button
          title="Voltar"
          onPress={() => navigation.popToTop()}
        />
    </View>
  );
}
export default Data;

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection:'column',
        justifyContent:'space-between',
        height: 150,
        margin: 10,    
    },
    input: {
        width: 300,
        height: 67,
        backgroundColor: 'white',
        borderRadius: 10,
        paddingHorizontal: 10,
      },
})