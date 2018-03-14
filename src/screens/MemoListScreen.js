import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text } from 'react-native';
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

export default class MemoListScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      memoList: null,
    };
  }

  componentWillMount() {
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    db.collection(`users/${currentUser.uid}/memos`)
      .onSnapshot((snapshot) => {
        const memoList = [];
        snapshot.forEach((doc) => {
          memoList.push({ ...doc.data(), key: doc.id });
        });
        this.setState({
          memoList,
        });
      });
  }

  handlePress() {
    this.props.navigation.navigate('MemoCreate');
  }

  render() {
    if (this.state.memoList === null) {
      return (
        <View style={styles.container}>
          <Text>データ読み込み中...</Text>
          <CircleButton
            style={styles.addButton}
            onPress={() => this.handlePress()}
          >
            {'\uf067'}
          </CircleButton>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <MemoList memoList={this.state.memoList} navigation={this.props.navigation} />
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

MemoListScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
