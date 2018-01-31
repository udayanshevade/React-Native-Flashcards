import React, { Component } from 'react';
import { View } from 'react-native';
import { Text, Button } from 'react-native-elements';
import Carousel from 'react-native-snap-carousel';
import QuizCard from '../Cards/QuizCard';
import styles from '../../styles';
import { sliderWidth, itemWidth } from '../../utils';

class Quiz extends Component {
  state = {
    testing: false,
    activeSlide: 1,
  }
  setActiveSlide = (i) => {
    this.setState({ active: i });
  }
  setTesting = (testing) => {
    this.setState({ testing });
  }
  renderItem = ({ item, index }) => (
    <QuizCard cardData={item} />
  )
  render() {
    const { screenProps: { deckData } } = this.props;
    const { questions } = deckData;
    const { testing } = this.state;
    return (
      <View style={styles.container}>
        {!testing &&
          <View>
            <Text h4 style={[styles.title, styles.centered]}>Start quiz</Text>
            <Button
              backgroundColor="#2096F3"
              onPress={() => {
                this.setTesting(true);
              }}
              title="Start"
              buttonStyle={styles.button}
            />
          </View>
        }
        {testing &&
          <View style={styles.container}>
            <Carousel
              ref={(c) => { this.carousel = c; }}
              data={questions}
              renderItem={this.renderItem}
              onSnapToItem={this.setActiveSlide}
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
            />
            <Button
              backgroundColor="white"
              onPress={() => {
                this.setTesting(false);
              }}
              color="#2096F3"
              title="Quit"
              buttonStyle={styles.button}
            />
          </View>
        }
      </View>
    );
  }
}

export default Quiz;
