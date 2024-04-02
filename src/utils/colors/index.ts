interface ColorsSet {
  [key: string]: string;
}

const mainColors: ColorsSet = {
  blue1: '#0078FF',
  blue2: '#EAF4FB',
  dark1: '#112340',
  dark2: '#D0CEDC',
  dark3: '#8092AF',
  grey1: '#7D8797',
  grey2: '#E9E9E9',
  grey3: '#EDEFE0',
  black1: '#000 ',
  black2: 'rgba(0,0,0,0.5) ',
  red1: '#E06379',
};

export const colors: ColorsSet = {
  primary: mainColors.blue1,
  secondary: mainColors.dark1,
  white: 'white',
  black: 'black',
  cardLight: mainColors.blue2,
  disable: mainColors.grey3,
  text: {
    primary: mainColors.dark1,
    secondary: mainColors.grey1,
    menuInactive: mainColors.dark2,
    menuActive: mainColors.blue1,
    subTitle: mainColors.dark3,
  },
  button: {
    primary: {
      background: mainColors.blue1,
      text: 'white',
    },
    secondary: {
      background: 'white',
      text: mainColors.dark1,
    },
    border: mainColors.grey2,
  },
  border: mainColors.grey2,
  loadingBackground: mainColors.black2,
  error: mainColors.red1,
};

export default colors;
