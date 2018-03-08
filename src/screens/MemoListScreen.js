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

export default class MemoListScreen extends React.Component {
  handlePress() {
    this.props.navigation.navigate('MemoCreate');
  }

  render() {
    return (
      <View style={styles.container}>
        <MemoList navigation={this.props.navigation} />
        <CircleButton
          style={styles.addButton}
          onPress={() => this.handlePress()}
        >
          {'\uf067'}
        </CircleButton>
      </View>
    );
  }
}
