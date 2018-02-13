import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  text: {
    color: '#DDD',
  },
});

const BodyText = () => (
  <View>
    <Text style={styles.text}>hello!</Text>
  </View>
);

export default BodyText;
