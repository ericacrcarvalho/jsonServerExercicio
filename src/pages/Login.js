import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { URL } from '../server/constants';

const Login = () => {
    
    const navigation = useNavigation();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        const result = await fetch(`${URL}/users?name=${name}&password=${password}`, {
          method: "GET",
          headers: {
            'content-type': 'application/json'
          }
        })
        .then((response) => response.json())
        .then((response) => {
          return response;
        })
        .catch((error) => {
          console.error(error);
        })

        if (result.length != 0) {
          const storeData = async (result) => {
            try {
              const value = JSON.stringify(result[0]);
              await AsyncStorage.setItem('userData', value);
            }
            catch (error) {
              console.error(error);
            }
          }
          storeData(result);
          navigation.navigate("Tabs");
        }
        else {
          alert("Usuário não cadastrado.")
        }

        setName("");
        setPassword("");
    }

    const handleRegister = () => {
      navigation.navigate("Register");
    }

    const handleData = () => {
      navigation.navigate("Data");
    }

    return (
      <View style={styles.container}>
        <Text style={{fontSize: 26, textAlign: 'center', fontWeight: 'bold', margin: 18}}>Login</Text>
        <View style={styles.inputContainer}>
          <TextInput 
            style={styles.input}
            placeholder="User"
            fontSize={16}
            value={name}
            onChangeText={setName}
            autoCapitalize="sentences"
          />
          <TextInput 
            style={styles.input}
            placeholder="Password"
            fontSize={16}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />
        </View>
        <Button
          title="Login"
          onPress={handleLogin}
        />
        <Button
          title="Cadastrar"
          onPress={handleRegister}
        />  
        <Button
          title="Exibir dados"
          onPress={handleData}
        />      
    </View>
  );
}
export default Login;

const styles = StyleSheet.create({
    container: {
      margin: 6,
    },
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
        fontFamily: 20
      },
})