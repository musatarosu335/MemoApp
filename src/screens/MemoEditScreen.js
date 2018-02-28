import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import CircleButton from '../elements/CircleButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  memoEditInput: {
    flex: 1,
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    fontSize: 16,
  },
});

const MemoEditScreen = props => (
  <View style={styles.container}>
    <TextInput style={styles.memoEditInput} multiline value="Hi" />
    <CircleButton onPress={() => (props.navigation.goBack())}>
      {'\uf00c'}
    </CircleButton>
  </View>
);

export default MemoEditScreen;
