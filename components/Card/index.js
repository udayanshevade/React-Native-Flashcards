import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card } from 'react-native-elements';

class CardComponent extends Component {
  state = {
    flipped: false,
  }
  render() {
    return (
      <View>
        <Card>
          <Text>Card</Text>
        </Card>
      </View>
    );
  }
}

export default CardComponent;
