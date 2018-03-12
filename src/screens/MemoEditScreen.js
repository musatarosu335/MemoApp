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

export default class MemoEditScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      key: '',
    };
  }

  componentWillMount() {
    const { params } = this.props.navigation.state;
    this.setState({
      body: params.memo.body,
      key: params.memo.key,
    });
  }

  handleChange(text) {
    this.setState({
      body: text,
    });
  }

  handlePress() {
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    db.collection(`users/${currentUser.uid}/memos`).doc(this.state.key)
      .update({
        body: this.state.body,
      })
      .then(() => {
        // eslint-disable-next-line
        console.log('success!');
      })
      .catch((err) => {
        // eslint-disable-next-line
        console.log(err);
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
