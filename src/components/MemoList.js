import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, FlatList } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  memoList: {
    width: '100%',
    flex: 1,
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

const dateString = (date) => {
  const str = date.toISOString();
  return str.split('T')[0];
};

const MemoList = (props) => {
  const memos = props.memoList;
  return (
    <View style={styles.memoList}>
      <FlatList
        data={memos}
        renderItem={({ item }) => (
          <TouchableHighlight
            onPress={() => (props.navigation.navigate('MemoDetail', { memo: item }))}
          >
            <View style={styles.memoListItem}>
              <Text style={styles.memoTitle}>{item.body.substring(0, 10)}</Text>
              <Text style={styles.memoDate}>{dateString(item.createdOn)}</Text>
            </View>
          </TouchableHighlight>
        )}
      />
      {/*
        {memos.map(memo => (
          <TouchableHighlight
            key={memo.createdOn}
            onPress={() => (props.navigation.navigate('MemoDetail'))}
          >
            <View style={styles.memoListItem}>
              <Text style={styles.memoTitle}>{memo.body}</Text>
              <Text style={styles.memoDate}>2018.03.08</Text>
            </View>
          </TouchableHighlight>
        ))}
      */}
    </View>
  );
};

MemoList.propTypes = {
  memoList: PropTypes.array.isRequired,
};

export default MemoList;
