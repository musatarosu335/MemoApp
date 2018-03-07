import React from 'react';
import { StyleSheet, View } from 'react-native';
import firebase from 'firebase';
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

// props.navigation.navigate('MemoEdit')

export default class MemoListScreen extends React.Component {
  // eslint-disable-next-line
  handlePress() {
    const db = firebase.firestore();
    const { uid } = this.params.currentUser;
    db.collection(`users/${uid}/memos`).add({
      body: 'test memo',
      createdOn: '2018-03-06',
    })
      .then((docRef) => {
        console.log('Document written with ID: ', docRef.id);
      })
      .catch((err) => {
        console.error('Error adding document: ', err);
      });
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
