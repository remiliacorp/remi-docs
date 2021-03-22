import defaultColors from './colors';

const colors = {
  ...defaultColors,

  primary: '#ffb500',
  primaryDark: defaultColors.white,
  font: '#f3f3f3',
  fontDark: '#ffffff',
  background: '#303022',
  mainBackground: '#000000',
  border: '#ffb500',
  hover: defaultColors.orange,
  shadow: defaultColors.black + '33',
};

export default {
  colors: colors,
};
