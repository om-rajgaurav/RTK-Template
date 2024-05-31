import React from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';

const RenderPost = ({item}) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.price}>Price: ${item.price}</Text>
      <Text style={styles.discount}>
        Discount Percentage: {item.discountPercentage}%
      </Text>
      <Text style={styles.rating}>Rating: {item.rating}</Text>
      <Text style={styles.stock}>Stock: {item.stock}</Text>
      <Text style={styles.brand}>Brand: {item.brand}</Text>
      <Text style={styles.category}>Category: {item.category}</Text>
      <Image source={{uri: item.thumbnail}} style={styles.thumbnail} />
      {/* Rendering additional images */}
      <FlatList
        data={item.images}
        renderItem={({item}) => (
          <Image source={{uri: item}} style={styles.additionalImage} />
        )}
        keyExtractor={(item, index) => index.toString()}
        horizontal
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    marginBottom: 10,
  },
  price: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  discount: {
    marginBottom: 5,
  },
  rating: {
    marginBottom: 5,
  },
  stock: {
    marginBottom: 5,
  },
  brand: {
    marginBottom: 5,
  },
  category: {
    marginBottom: 10,
  },
  thumbnail: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10,
    borderRadius: 10,
  },
  additionalImage: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: 'black',
    margin: 5,
    borderRadius: 5,
  },
});

export default RenderPost;
