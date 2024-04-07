import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {RootStackParamList} from './RootStackParams';

declare module '*.svg' {
  import React from 'react';
  import {SvgProps} from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}

declare module '*.png' {
  const value: string | ImageSourcePropType; // Ganti dengan tipe yang sesuai dengan data yang mewakili gambar
  export default value;
}

declare module '*.jpg' {
  const value: string | ImageSourcePropType; // Ganti dengan tipe yang sesuai dengan data yang mewakili gambar
  export default value;
}

export type NavigationProps = {
  navigation: NavigationProp<ParamListBase>;
};
export type NavigationPropsStack = {
  navigation: StackNavigationProp<RootStackParamList>;
};
