// ForgetPasswordScreen.js
import React, {useState} from 'react';
import {View, TextInput, Button, Text, StyleSheet} from 'react-native';
import {useForgetPasswordMutation} from '../store/slices/authApiSlice'; // Import the forget password mutation

const ForgetPasswordScreen = () => {
  const [email, setEmail] = useState('');
  const [resetError, setResetError] = useState('');
  const [resetSuccess, setResetSuccess] = useState(false);
  const [resetPassword, {isLoading}] = useForgetPasswordMutation();

  const handleResetPassword = () => {
    resetPassword({email})
      .unwrap()
      .then(() => {
        setResetSuccess(true); // Set reset success message
      })
      .catch(error => {
        setResetError('Password reset failed. Please try again.'); // Handle reset error
      });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={text => setEmail(text)}
        value={email}
        keyboardType="email-address"
      />
      <Button
        title="Reset Password"
        onPress={handleResetPassword}
        disabled={isLoading}
      />
      {resetError ? <Text style={styles.error}>{resetError}</Text> : null}
      {resetSuccess ? (
        <Text style={styles.success}>
          Password reset link sent to your email.
        </Text>
      ) : null}
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
  success: {
    color: 'green',
    marginTop: 10,
  },
});

export default ForgetPasswordScreen;
