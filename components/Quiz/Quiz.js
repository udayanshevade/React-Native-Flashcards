import React, { Component } from 'react';
import Carousel from 'react-native-snap-carousel';
import QuizCard from '../Cards/QuizCard';
import { sliderWidth, itemWidth } from '../../utils';
import basicStyles from '../../styles';

class Quiz extends Component {
  state = {
    activeSlide: 1,
  }
  componentDidMount() {
    this.animate();
  }
  setActiveSlide = (i) => {
    this.setState({ active: i });
  }
  renderItem = ({ item, index }) => (
    <QuizCard cardData={item} />
  )
  animate = () => {
    this.carousel.snapToItem(this.props.questions.length - 1);
  }
  render() {
    const { questions } = this.props;
    return (
      <Carousel
        data={questions}
        renderItem={this.renderItem}
        firstItem={questions.length - 1}
        onSnapToItem={this.setActiveSlide}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
        layout="tinder"
        contentContainerCustomStyle={{ alignItems: 'center' }}
        ref={(c) => { this.carousel = c; }}
      />
    );
  }
}

export default Quiz;
