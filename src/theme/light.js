import defaultColors from './colors';

const colors = {
  ...defaultColors,

  primary: defaultColors.white,
  primaryDark: defaultColors.white,
  font: '#008000',
  fontDark: '#121213',
  background: '#026a02',
  mainBackground: '#026a02',
  border: '#9a9a9a',
  hover: defaultColors.white,
  shadow: defaultColors.white + '33',
};

export default {
  colors: colors,
};
