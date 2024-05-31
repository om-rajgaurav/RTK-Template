import React, {useState} from 'react';
import {
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {useLoginMutation} from '../store/slices/authApiSlice';
import {setToken, setUserData} from '../store/slices/authSlice';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('kminchelle');
  const [password, setPassword] = useState('0lelplR');
  const [loginError, setLoginError] = useState('');
  const [login, {isLoading}] = useLoginMutation();

  const handleLogin = async () => {
    try {
      const response = await login({
        username,
        password,
        expiresInMins: 1,
      }).unwrap();
      dispatch(setToken(response.token));
      dispatch(setUserData(response.user));
    } catch (error) {
      setLoginError('Login failed. Please check your credentials.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={text => setUsername(text)}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} disabled={isLoading} />
      {isLoading && (
        <ActivityIndicator style={styles.loader} size="large" color="#0000ff" />
      )}
      {loginError ? <Text style={styles.error}>{loginError}</Text> : null}
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
  loader: {
    marginTop: 20,
  },
});

export default LoginScreen;
