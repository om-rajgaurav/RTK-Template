// SignupScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';


const SignupScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [signupError, setSignupError] = useState('');


  const handleSignup = () => {
  
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        // onChangeText={(text) => setUsername(text)}
        onChangeText={() =>{}}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        // onChangeText={(text) => setPassword(text)}
        onChangeText={() =>{}}
        value={password}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={() =>{}}
        // onChangeText={(text) => setEmail(text)}
        value={email}
        keyboardType="email-address"
      />
      <Button
        title="Sign Up"
        onPress={handleSignup}
        disabled={isLoading}
      />
      {signupError ? <Text style={styles.error}>{signupError}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  error: {
    color: 'red',
    marginTop: 10,
  },
});

export default SignupScreen;
