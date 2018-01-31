import { Dimensions } from 'react-native';

export const FLASHCARD_DECKS_STORAGE_KEY = 'FLASHCARD_DECKS_STORAGE_KEY';

export const { width: viewportWidth } = Dimensions.get('window');
export const sliderWidth = viewportWidth;
export const slideWidth = Math.round(0.75 * viewportWidth);
export const horizontalMargin = Math.round(0.02 * viewportWidth);
export const itemWidth = slideWidth + (horizontalMargin * 2);

// fuzzy match util fn
export const fuzzyMatch = (str, pattern) => {
  const p = pattern.split("").reduce((a, b) => a + ".*" + b);
  return (new RegExp(p)).test(str);
};
