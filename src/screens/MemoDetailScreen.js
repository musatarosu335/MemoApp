import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CircleButton from '../elements/CircleButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  memoHeader: {
    marginTop: 78,
    padding: 10,
    height: 100,
    backgroundColor: '#17313c',
    justifyContent: 'center',
  },
  memoHeaderTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  memoHeaderDate: {
    fontSize: 12,
    color: '#fff',
  },
  memoContent: {
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  editButton: {
    top: 154,
  },
});

const MemoDetailScreen = () => (
  <View style={styles.container}>
    <View>
      <View style={styles.memoHeader}>
        <View>
          <Text style={styles.memoHeaderTitle}>講座のアイデア</Text>
          <Text style={styles.memoHeaderDate}>Yesterday</Text>
        </View>
      </View>
    </View>

    <View style={styles.memoContent}>
      <Text> 講座のタイトル</Text>
    </View>

    <CircleButton color="white" style={styles.editButton}>{'\uf040'}</CircleButton>
  </View>
);

export default MemoDetailScreen;
