import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  circleButton: {
    position: 'absolute',
    bottom: 32,
    right: 32,
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
  circleButtonTitle: {
    fontSize: 24,
    lineHeight: 24,
  },
});

const CircleButton = (props) => {
  const { style, color } = props;
  let bgColor = '#E31676';
  let textColor = '#fff';

  if (color === 'white') {
    bgColor = '#fff';
    textColor = '#E31676';
  }

  return (
    <View style={[styles.circleButton, style, { backgroundColor: bgColor }]}>
      <Text style={[styles.circleButtonTitle, { color: textColor }]}>
        {props.children}
      </Text>
    </View>
  );
};

CircleButton.propTypes = {
  children: PropTypes.string.isRequired,
  style: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

export default CircleButton;
