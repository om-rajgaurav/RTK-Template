// HomeScreen.js
import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import {useGetPostsQuery} from '../store/slices/postApiSlice'; // Import the query hook for fetching posts
import {logout} from '../store/slices/authSlice';
import {useDispatch} from 'react-redux';
import RenderPost from '../components/RenderPost';
import {persistor} from '../store';
import {useGetCurrentUSerQuery} from '../store/slices/authApiSlice';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const navigation = useNavigation();
  const {data, isLoading, isFetching, isError, fetchNextPage, hasNextPage} =
    useGetPostsQuery();

  const {
    data: userData,
    isLoading: userLoading,
    isError: userError,
  } = useGetCurrentUSerQuery();

  navigation.setOptions();

  console.log('userData', userData);
  const renderFooter = () => {
    if (isLoading || isFetching) {
      return <ActivityIndicator size="large" color="#0000ff" />;
    }
    return null;
  };

  const handleLoadMore = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  if (isLoading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (isError) {
    return <Text>Error fetching data</Text>;
  }

  const onPressLogout = () => {
    dispatch(logout());
    persistor.purge();
  };

  return (
    <View style={styles.container}>
      <Text onPress={onPressLogout}>Logout</Text>
      <FlatList
        data={data.products}
        renderItem={({item}) => <RenderPost item={item} />}
        keyExtractor={item => item.id.toString()}
        ListFooterComponent={renderFooter}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
