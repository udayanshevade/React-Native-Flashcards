import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import Carousel from 'react-native-snap-carousel';
import QuizCard from '../Cards/QuizCard';
import { sliderWidth, itemWidth } from '../../utils';
import basicStyles from '../../styles';
import quizStyles from './styles';

class Quiz extends Component {
  componentDidMount() {
    this.props.setActiveSlide(this.props.questions.length - 1);
  }
  renderItem = ({ item, index }) => (
    <QuizCard
      cardData={item}
      active={index === this.props.activeSlide}
    />
  );
  moveToSlide = (i) => {
    this.carousel.snapToItem(i);
  }
  render() {
    const { questions, setActiveSlide } = this.props;
    const lastSlide = questions.length - 1;
    return (
      <View style={quizStyles.carouselContainer}>
        <Carousel
          data={questions}
          firstItem={lastSlide}
          renderItem={this.renderItem}
          onSnapToItem={setActiveSlide}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          layout="tinder"
          contentContainerCustomStyle={{ alignItems: 'center' }}
          ref={(c) => { this.carousel = c; }}
        />
        <Button
          backgroundColor="transparent"
          color="#2096F3"
          onPress={() => {
            this.moveToSlide(lastSlide);
          }}
          title="Reset"
          buttonStyle={basicStyles.button}
        />
      </View>
    );
  }
}

export default Quiz;
