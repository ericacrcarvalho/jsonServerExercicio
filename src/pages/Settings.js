import React, { useState, useRef } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { URL } from '../server/constants';
import { Modalize } from 'react-native-modalize';

const Settings = () => {

  // Modalize
  const modalizeRef = useRef(null);
  const openModalize = () => {
      modalizeRef.current?.open();
  };

  // Edit password
  const [idEdit, setIdEdit] = useState("");
  const handleEdit = () => {
    openModalize();
  }

  // PUT / PATCH
  const [newPassword, setNewPassword] = useState("");
  const handleUpdate = () => {
  }

  // Delete user
  const [idDelete, setIdDelete] = useState("");
    const handleDelete = () => {
  }

  return (
    <View style={styles.container}>
        <Text style={{fontSize: 26, textAlign: 'center', fontWeight: 'bold', margin: 18}}>Settings</Text>
        <View>
        <Text>Insira o id do usuário que deseja editar.</Text>
        <TextInput
          style={styles.input}
          placeholder="id do usuário"
          textAlign="center"
          value={idEdit}
          onChangeText={setIdEdit}
        />
      </View>
      <Button
          title="Editar senha"
          onPress={handleEdit}
        />
      <View>
        <Text style={{marginTop: 10}}>Insira o id do usuário que deseja deletar.</Text>
        <TextInput
          style={styles.input}
          placeholder="id do usuário"
          textAlign="center"
          value={idDelete}
          onChangeText={setIdDelete}
        />
      </View>
      <Button
          title="Deletar"
          onPress={handleDelete}
        />
        <Modalize
            ref={modalizeRef}
            snapPoint={180}
            modalHeight={400}
        >
            <View style={{flex: 1, height: 180, justifyContent: 'space-around', alignItems: 'center', margin: 20}}>
            <Text>Digite a nova senha</Text>
            <TextInput
              style={styles.input}
              placeholder="Nova senha"
              textAlign="center"
              value={newPassword}
              onChangeText={setNewPassword}
              secureTextEntry={true}
            />
            <Button
              title="Alterar senha"
              onPress={handleUpdate}
            />
            </View>
        </Modalize>
    </View>
  );
}
export default Settings;

const styles = StyleSheet.create({
  container: {
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
      paddingHorizontal: 8,
      margin: 2,
      fontFamily: 20
    },
})