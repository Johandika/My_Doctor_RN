import React from 'react';
import {View, ViewStyle} from 'react-native';

interface GapProps {
  size: number;
  direction?: 'horizontal' | 'vertical';
}

const Gap: React.FC<GapProps> = ({size, direction = 'vertical'}) => {
  const gapStyle: ViewStyle = {
    [direction === 'horizontal' ? 'width' : 'height']: size,
  };

  return <View style={gapStyle} />;
};

export default Gap;
