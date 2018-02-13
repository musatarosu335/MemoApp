import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appbar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 78,
    paddingTop: 30,
    backgroundColor: '#265366',
    justifyContent: 'center',
    alignItems: 'center',
  },
  appbarTitle: {
    color: '#fff',
    fontSize: 18,
  },
});

const App = () => (
  <View style={styles.container}>
    <View style={styles.appbar}>
      <View>
        <Text style={styles.appbarTitle}>MEMOT</Text>
      </View>
    </View>

    <View style={styles.memoList}>
      <View style={styles.memoListItem}>
        <Text style={styles.memoTitle}>講座のアイテム</Text>
        <Text style={styles.memoDate}>2018/2/13</Text>
      </View>
    </View>

    <View style={styles.memoList}>
      <View style={styles.memoListItem}>
        <Text style={styles.memoTitle}>講座のアイテム</Text>
        <Text style={styles.memoDate}>2018/2/13</Text>
      </View>
    </View>

    <View style={styles.memoList}>
      <View style={styles.memoListItem}>
        <Text style={styles.memoTitle}>講座のアイテム</Text>
        <Text style={styles.memoDate}>2018/2/13</Text>
      </View>
    </View>

    <View>
      +
    </View>
  </View>
);

export default App;
