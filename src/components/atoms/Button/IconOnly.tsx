import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {IconChevronLeft} from '../../../assets/icon';

type IconType = 'back-dark' | 'back-light' | undefined;

interface IconOnlyProps {
  onPress: () => void;
  icon: IconType;
}

const Icon = ({icon}: {icon: IconType}) => {
  if (icon === 'back-dark') {
    return <IconChevronLeft />;
  }
  if (icon === 'back-light') {
    return <IconChevronLeft />;
  }
  return <IconChevronLeft />;
};

const IconOnly: React.FC<IconOnlyProps> = ({onPress, icon}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon icon={icon} />
    </TouchableOpacity>
  );
};

export default IconOnly;
