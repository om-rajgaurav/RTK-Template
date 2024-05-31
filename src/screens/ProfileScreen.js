import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const ProfileScreen = ({userData}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: userData.image}} style={styles.profileImage} />
      <Text style={styles.name}>
        {userData.firstName} {userData.lastName}
      </Text>
      <Text style={styles.username}>@{userData.username}</Text>
      <Text style={styles.email}>{userData.email}</Text>
      <Text style={styles.details}>
        Age: {userData.age} | Gender: {userData.gender} | Blood Group:{' '}
        {userData.bloodGroup}
      </Text>
      <Text style={styles.details}>Address: {userData.address.address}</Text>
      <Text style={styles.details}>
        City: {userData.address.city}, State: {userData.address.state}, Postal
        Code: {userData.address.postalCode}
      </Text>
      <Text style={styles.details}>
        Phone: {userData.phone} | Email: {userData.email}
      </Text>
      <Text style={styles.details}>University: {userData.university}</Text>
      {/* Add more details as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  username: {
    fontSize: 18,
    color: 'gray',
    marginBottom: 10,
  },
  email: {
    fontSize: 16,
    marginBottom: 10,
  },
  details: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default ProfileScreen;
