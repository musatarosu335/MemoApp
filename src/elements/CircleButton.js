import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';
import { Font } from 'expo';
import fontAwesome from '../../assets/fonts/fontawesome-webfont.ttf';

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
    fontFamily: 'FontAwesome',
    fontSize: 24,
    lineHeight: 24,
  },
});

export default class CircleButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false,
    };
  }

  async componentWillMount() {
    await Font.loadAsync({
      FontAwesome: fontAwesome,
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    const { style, color } = this.props;
    let bgColor = '#E31676';
    let textColor = '#fff';

    if (color === 'white') {
      bgColor = '#fff';
      textColor = '#E31676';
    }

    return (
      <View style={[styles.circleButton, style, { backgroundColor: bgColor }]}>
        {
          this.state.fontLoaded ? (
            <Text style={[styles.circleButtonTitle, { color: textColor }]}>
              {this.props.children}
            </Text>
          ) : null
        }
      </View>
    );
  }
}

CircleButton.propTypes = {
  children: PropTypes.string.isRequired,
  style: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};
