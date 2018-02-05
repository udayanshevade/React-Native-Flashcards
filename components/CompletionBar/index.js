import React, { Component } from 'react';
import { Animated, StyleSheet } from 'react-native';
import { viewportWidth } from '../../utils';

class CompletionBar extends Component {
  state = {
    animatedValue: new Animated.Value(this.props.min),
  }
  componentWillMount() {
    this.extend = this.state.animatedValue.interpolate({
      inputRange: [this.props.min, this.props.max],
      outputRange: [0, 1],
    });
  }
  componentWillReceiveProps(nextProps) {
    const { current, duration = 500 } = this.props;
    if (current !== nextProps.current) {
      Animated.timing(this.state.animatedValue, {
        toValue: nextProps.current,
        duration: duration,
      }).start();
    }
  }
  render() {
    const { min, max, current, style = {} } = this.props;
    const transformStyle = {
      transform: [{
        scaleX: this.extend,
      }],
    };
    return (
      <Animated.View
        style={[
          styles.bar,
          style,
          transformStyle,
        ]}
      />
    );
  }
}

const styles = StyleSheet.create({
  bar: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: 3,
    backgroundColor: '#aaa',
  },
});

export default CompletionBar;
