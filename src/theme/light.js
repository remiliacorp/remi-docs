import defaultColors from './colors';

const colors = {
  ...defaultColors,

  primary: '#008000',
  primaryDark: defaultColors.orangeLight,
  font: '#000000',
  fontDark: '#008000',
  background: '#ffffe0',
  mainBackground: '#ffffe0',
  border: '#000000',
  hover: '#008000',
  shadow: defaultColors.grayLight + '33',
};

export default {
  colors: colors,
};
