import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CircleButton from '../elements/CircleButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  memoHeader: {
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
    top: 78,
  },
});

export default class MemoDetailScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      memo: {},
    };
  }

  componentWillMount() {
    const { params } = this.props.navigation.state;
    this.setState({
      memo: params.memo,
    });
  }

  render() {
    const { memo } = this.state;

    return (
      <View style={styles.container}>
        <View>
          <View style={styles.memoHeader}>
            <View>
              <Text style={styles.memoHeaderTitle}>{memo.body}</Text>
              <Text style={styles.memoHeaderDate}>{String(memo.createdOn)}</Text>
            </View>
          </View>
        </View>

        <View style={styles.memoContent}>
          <Text>{memo.body}</Text>
        </View>

        <CircleButton
          color="white"
          style={styles.editButton}
          onPress={() => (this.props.navigation.navigate('MemoEdit'))}
        >
          {'\uf040'}
        </CircleButton>
      </View>
    );
  }
}
