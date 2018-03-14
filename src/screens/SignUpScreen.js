import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableHighlight } from 'react-native';
import { NavigationActions } from 'react-navigation';
import firebase from 'firebase';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    alignSelf: 'center',
    marginBottom: 24,
  },
  input: {
    height: 48,
    marginBottom: 16,
    padding: 8,
    backgroundColor: '#eee',
    borderWidth: 1,
    borderColor: '#DDD',
  },
  button: {
    backgroundColor: '#E31676',
    height: 48,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    alignSelf: 'center',
  },
  buttonTitle: {
    color: '#fff',
    fontSize: 18,
  },
});

export default class SignUpScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit() {
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((user) => {
        // eslint-disable-next-line
        console.log('success!', user);
        const resetAction = NavigationActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'Home' }),
          ],
        });
        this.props.navigation.dispatch(resetAction);
      })
      .catch((err) => {
        // eslint-disable-next-line
        console.log(err);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>メンバー登録</Text>
        <TextInput
          style={styles.input}
          value={this.state.email}
          onChangeText={text => this.setState({ email: text })}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Email Asress"
        />
        <TextInput
          style={styles.input}
          value={this.state.password}
          onChangeText={text => this.setState({ password: text })}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Password"
          secureTextEntry
        />
        <TouchableHighlight
          style={styles.button}
          underlayColor="#C70F66"
          onPress={() => this.handleSubmit()}
        >
          <Text style={styles.buttonTitle}>送信する</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
