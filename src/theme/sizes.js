import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('screen');

const SIZES = {
  BASE: 16,
  FONT: 16,
  ICON: 16,
  OPACITY: 0.8,
  BORDER_RADIUS: 6,
  BORDER_WIDTH: 0.8,

  // Button styles
  BUTTON_WIDTH: 16 * 9,
  BUTTON_HEIGHT: 16 * 2.75,
  BUTTON_SHADOW_RADIUS: 10,

  // Block styles
  BLOCK_SHADOW_OPACITY: 0.15,
  BLOCK_SHADOW_RADIUS: 8,
  ANDROID_ELEVATION: 1,

  // Card styles
  CARD_BORDER_RADIUS: 16 * 0.4,
  CARD_BORDER_WIDTH: 16 * 0.05,
  CARD_WIDTH: width - (16 * 2),
  CARD_MARGIN_VERTICAL: 16 * 0.875,
  CARD_FOOTER_HORIZONTAL: 16 * 0.75,
  CARD_FOOTER_VERTICAL: 16 * 0.75,
  CARD_AVATAR_WIDTH: 16 * 2.5,
  CARD_AVATAR_HEIGHT: 16 * 2.5,
  CARD_AVATAR_RADIUS: 16 * 1.25,
  CARD_IMAGE_HEIGHT: 16 * 12.5,
  CARD_ROUND: 16 * 0.1875,
  CARD_ROUNDED: 16 * 0.5,

  // Input styles
  INPUT_BORDER_RADIUS: 16 * 0.5,
  INPUT_BORDER_WIDTH: 16 * 0.05,
  INPUT_HEIGHT: 16 * 2.75,
  INPUT_HORIZONTAL: 16,
  INPUT_TEXT: 16 * 0.875,
  INPUT_LABEL_TEXT: 16 * 0.9,
  INPUT_LABEL_BOTTOM: 16 / 4,
  INPUT_HELP_TEXT: 16 * 0.8,
  INPUT_ROUNDED: 16 * 1.7,

  // NavBar styles
  NAVBAR_HEIGHT: 16 * 4.125,
  NAVBAR_VERTICAL: 16,
  NAVBAR_TITLE_FLEX: 2,
  NAVBAR_TITLE_HEIGHT: height * 0.07,
  NAVBAR_TITLE_TEXT: 16 * 0.875,
  NAVBAR_LEFT_FLEX: 0.5,
  NAVBAR_LEFT_HEIGHT: height * 0.07,
  NAVBAR_LEFT_MARGIN: 16,
  NAVBAR_RIGHT_FLEX: 0.5,
  NAVBAR_RIGHT_HEIGHT: height * 0.07,
  NAVBAR_RIGHT_MARGIN: 16,

  // Checkbox
  CHECKBOX_WIDTH: 24,
  CHECKBOX_HEIGHT: 24,

  // Slider
  TRACK_SIZE: 4,
  THUMB_SIZE: 25,
  
  // Radio Button
  RADIO_WIDTH: 24,
  RADIO_HEIGHT: 24,
  RADIO_THICKNESS: 2,

};

export default SIZES;
