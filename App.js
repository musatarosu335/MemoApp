import React from 'react';
import { StyleSheet, View } from 'react-native';

import Appbar from './src/components/Appbar';
import MemoList from './src/components/MemoList';
import MemoAddButton from './src/components/MemoAddButton';

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
    <MemoList />
    <MemoAddButton />
  </View>
);

export default App;
