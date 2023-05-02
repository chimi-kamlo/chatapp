



import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function RegisterScreen() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const registerUser = () => {
    // Code to register user
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Créer un compte</Text>

      <TextInput
        style={styles.input}
        placeholder="Adresse e-mail"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="Mot de passe"
        value={password}
        onChangeText={setPassword}
      />

      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="Confirmer le mot de passe"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={registerUser}
      >
        <Text style={styles.buttonText}>S'inscrire</Text>
      </TouchableOpacity>

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
  title: {
    fontSize: 24,
    marginBottom: 32,
  },
  input: {
    width: "80%",
    height: 50,
    borderWidth: 1,
    borderColor: "gray",
    marginBottom: 16,
    padding: 12,
    borderRadius: 10,
  },
  button: {
    backgroundColor: "blue",
    width: "80%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  }