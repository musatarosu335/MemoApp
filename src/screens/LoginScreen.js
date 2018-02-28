import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableHighlight } from 'react-native';

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

const LoginScreen = props => (
  <View style={styles.container}>
    <Text style={styles.title}>ログイン</Text>
    <TextInput style={styles.input} value="Email Address" />
    <TextInput style={styles.input} value="Password" />
    <TouchableHighlight style={styles.button} onPress={() => (props.navigation.navigate('Home'))}>
      <Text style={styles.buttonTitle}>ログインする</Text>
    </TouchableHighlight>
  </View>
);

export default LoginScreen;
