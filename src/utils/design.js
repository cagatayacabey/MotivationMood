import { Dimensions, PixelRatio } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const originalWidth = 390;
const originalHeight = 844;

const widthScale = SCREEN_WIDTH / originalWidth;
const heightScale = SCREEN_HEIGHT / originalHeight;

const adjustSize = (size, based = 'width') => {
  const adaptedSize = based === 'height' ? size * heightScale : size * widthScale;
  return Math.round(PixelRatio.roundToNearestPixel(adaptedSize));
};

export const adjustWidth = (size) => adjustSize(size, 'width');
export const adjustHeight = (size) => adjustSize(size, 'height');
export const adjustFont = (size) => adjustWidth(size);

export function responsiveSize(size) {
  const { width } = Dimensions.get('window');
  return (size / originalWidth) * width;
}

export function responsiveSizeByHeight(size) {
  const { height } = Dimensions.get('window');
  return (size / originalHeight) * height;
}
