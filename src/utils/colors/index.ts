interface MainColors {
  blue1: string;
  blue2: string;
  dark1: string;
  dark2: string;
  grey1: string;
  grey2: string;
}

interface Colors {
  primary: string;
  secondary: string;
  white: string;
  black: string;
  cardLight: string;
  text: {
    primary: string;
    secondary: string;
    menuInactive: string;
    menuActive: string;
  };
  button: {
    primary: {
      background: string;
      text: string;
    };
    secondary: {
      background: string;
      text: string;
    };
    border: string;
  };
  border: string;
}

const mainColors: MainColors = {
  blue1: '#0078FF',
  blue2: '#EAF4FB',
  dark1: '#112340',
  dark2: '#D0CEDC',
  grey1: '#7D8797',
  grey2: '#E9E9E9',
};

export const colors: Colors = {
  primary: mainColors.blue1,
  secondary: mainColors.dark1,
  white: 'white',
  black: 'black',
  cardLight: mainColors.blue2,
  text: {
    primary: mainColors.dark1,
    secondary: mainColors.grey1,
    menuInactive: mainColors.dark2,
    menuActive: mainColors.blue1,
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
};

export default colors;
