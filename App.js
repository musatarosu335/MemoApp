import React from 'react';
import { StyleSheet, View } from 'react-native';

import Appbar from './src/components/Appbar';
import MemoList from './src/components/MemoList';
import CircleButton from './src/elements/CircleButton';

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
    <CircleButton />
  </View>
);

export default App;
