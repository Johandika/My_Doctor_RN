import {
  GestureResponderEvent,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {IconChevronLeft, IconChevronLeftWhite} from '../../../assets/icon';

type IconType = 'back-dark' | 'back-light' | undefined;

interface IconOnlyProps {
  onPress: (event: GestureResponderEvent) => void;
  icon: IconType;
}

const IconOnly: React.FC<IconOnlyProps> = ({onPress, icon}) => {
  const Icon = () => {
    if (icon === 'back-dark') {
      return <IconChevronLeft />;
    }
    if (icon === 'back-light') {
      return <IconChevronLeftWhite />;
    }
    return <IconChevronLeft />;
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon />
    </TouchableOpacity>
  );
};

export default IconOnly;
