import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  memoList: {
    width: '100%',
    flex: 1,
    paddingTop: 78,
    backgroundColor: '#fff',
  },
  memoListItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  memoTitle: {
    fontSize: 18,
    marginBottom: 4,
  },
  memoDate: {
    fontSize: 12,
    color: '#a2a2a2',
  },
});

const MemoList = () => (
  <View style={styles.memoList}>
    <View style={styles.memoListItem}>
      <Text style={styles.memoTitle}>講座のアイテム</Text>
      <Text style={styles.memoDate}>2018/2/13</Text>
    </View>

    <View style={styles.memoListItem}>
      <Text style={styles.memoTitle}>講座のアイテム</Text>
      <Text style={styles.memoDate}>2018/2/13</Text>
    </View>

    <View style={styles.memoListItem}>
      <Text style={styles.memoTitle}>講座のアイテム</Text>
      <Text style={styles.memoDate}>2018/2/13</Text>
    </View>
  </View>
);

export default MemoList;
