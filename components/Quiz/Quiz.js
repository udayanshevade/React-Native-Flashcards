import React, { Component } from 'react';
import { View } from 'react-native';
import { Text, Button } from 'react-native-elements';
import Carousel from 'react-native-snap-carousel';
import QuizCard from '../Cards/QuizCard';
import { sliderWidth, itemWidth } from '../../utils';
import basicStyles from '../../styles';
import quizStyles from './styles';

class Quiz extends Component {
  componentDidMount() {
    setTimeout(() => {
      const lastSlide = this.props.questions.length - 1;
      this.carousel.snapToItem(lastSlide);
      this.props.setIsInitialized(true);
    }, 200);
  }
  componentWillReceiveProps(nextProps) {
    const { activeSlide, results, isCorrect } = this.props;
    if (nextProps.activeSlide < activeSlide && !results[activeSlide]) {
      this.props.setQuestionCorrect(activeSlide, isCorrect);
    }
  }
  renderItem = ({ item, index }) => (
    <QuizCard
      cardData={item}
      active={index === this.props.activeSlide}
      setQuestionCorrect={(correct) => {
        this.props.setQuestionCorrect(index, correct);
        setTimeout(() => {
          const nextIndex = index - 1;
          if (nextIndex > -1 && this.props.results[index]) {
            this.carousel.snapToItem(nextIndex);
          }
        }, 300);
      }}
      result={this.props.results[index]}
    />
  );
  moveToLastSlide = () => {
    this.carousel.snapToItem(this.props.questions.length - 1);
    this.props.restart();
  }
  render() {
    const { questions, setActiveSlide, activeSlide } = this.props;
    const totalSlides = questions.length;
    const lastSlide = totalSlides - 1;
    return (
      <View style={quizStyles.carouselContainer}>
        <Text style={quizStyles.counter}>{totalSlides - activeSlide}/{totalSlides}</Text>
        <Carousel
          data={questions}
          renderItem={this.renderItem}
          onSnapToItem={setActiveSlide}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          layout="tinder"
          contentContainerCustomStyle={{ alignItems: 'center' }}
          ref={(c) => { this.carousel = c; }}
          decelerationRate="fast"
        />
        <Button
          backgroundColor="transparent"
          color="#2096F3"
          onPress={this.moveToLastSlide}
          title="Reset"
        />
      </View>
    );
  }
}

export default Quiz;
