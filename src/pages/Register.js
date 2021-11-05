import React, { useState } from 'react';
import { View, Button, TextInput, Text, StyleSheet } from 'react-native';
import { URL } from '../server/constants';

const Register = ({ navigation }) => {

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    if (name != "" & password != "") {
      const newUser = {
        name,
        password
      }
      fetch(`${URL}/users?name=${name}`, {
        method: "GET",
        headers: {
          'content-type': 'application/json'
        }
      })
      .then((response) => response.json())
      .then((response) => {
        if (response.length == 0) {
          fetch(`${URL}/users`, {
            method: "POST",
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
          })
          .then((response) => {
            if (response.ok) {
              navigation.popToTop();
              alert("Cadastro realizado com sucesso");
            } 
            else {
              alert("Ocorreu uma falha no cadastro");
            }
          })
        }
        else {
          alert("Usuário já cadastrado.\nFaça login ou cadastre um novo usuário.")
          setName("");
          setPassword("");
        }
      })     
    }
    else {
      alert("Insira todos os dados");
    }
  }

  return (
    <View style={styles.container}>
       <View>
        <Text>Insira seu nome</Text>
        <TextInput
          style={styles.input}
          placeholder="Seu nome"
          textAlign="center"
          value={name}
          onChangeText={setName}
        />
      </View>
      <View>
        <Text>Insira uma senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Sua senha"
          textAlign="center"
          value={password}
          onChangeText={setPassword}
          autoComplete="password"
          secureTextEntry={true}
        />
      </View>
      <Button
          title="Cadastrar"
          onPress={handleRegister}
        />
      <Button
          title="Voltar"
          onPress={() => navigation.popToTop()}
        />
    </View>
  );
}
export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }, 
  input: {
    width: 300,
    height: 67,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 10,
    fontFamily: 20
  }
})