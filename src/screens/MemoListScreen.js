import React from 'react';
import { StyleSheet, View } from 'react-native';
import MemoList from '../components/MemoList';
import CircleButton from '../elements/CircleButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fffdf6',
  },
  addButton: {
    bottom: 32,
  },
});

const MemoListScreen = props => (
  // props.navigation.navigate('MemoDetail');
  <View style={styles.container}>
    <MemoList navigation={props.navigation} />
    <CircleButton
      style={styles.addButton}
      onPress={() => (props.navigation.navigate('MemoEdit'))}
    >
      {'\uf067'}
    </CircleButton>
  </View>
);

export default MemoListScreen;
