import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import firebase from 'firebase';
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

export default class MemoCreateScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
    };
  }

  handleChange(text) {
    this.setState({
      body: text,
    });
  }

  handlePress() {
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    db.collection(`users/${currentUser.uid}/memos`).add({
      body: this.state.body,
      createdOn: new Date(),
    })
      .then((docRef) => {
        console.log('Document written with ID: ', docRef.id);
        this.props.navigation.goBack();
      })
      .catch((err) => {
        console.error('Error adding document: ', err);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.memoEditInput}
          multiline
          value={this.state.body}
          onChangeText={text => this.handleChange(text)}
        />
        <CircleButton
          onPress={() => this.handlePress()}
        >
          {'\uf00c'}
        </CircleButton>
      </View>
    );
  }
}
