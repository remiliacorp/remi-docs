import defaultColors from './colors';

const colors = {
  ...defaultColors,

  primary: defaultColors.orange,
  primaryDark: defaultColors.white,
  font: '#f3f3f3',
  fontDark: '#ffffff',
  background: '#303022',
  mainBackground: '#000000',
  border: '#ffb500',
  hover: defaultColors.orange,
  shadow: defaultColors.white + '33',
};

export default {
  colors: colors,
};
