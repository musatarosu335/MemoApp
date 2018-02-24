import React from 'react';
import { StyleSheet, View } from 'react-native';
import Appbar from './src/components/Appbar';
// import MemoListScreen from './src/screens/MemoListScreen';
// import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffdf6',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const App = () => (
  <View style={styles.container}>
    <Appbar />
    {/*
    <MemoListScreen />
    */}
    {/*
    <MemoDetailScreen />
    */}
    <MemoEditScreen />
  </View>
);

export default App;
