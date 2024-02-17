import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  IconDoctor,
  IconDoctorActive,
  IconHospital,
  IconHospitalActive,
  IconMessages,
  IconMessagesActive,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

type TabItemProps = {
  title: string;
  active: boolean;
};

const TabItem: React.FC<TabItemProps> = ({
  title,
  active,
  onPress,
  onLongPress,
}) => {
  const styles = getStyles(active);

  const Icon = () => {
    if (title === 'Doctor') {
      return active ? <IconDoctorActive /> : <IconDoctor />;
    }
    if (title === 'Messages') {
      return active ? <IconMessagesActive /> : <IconMessages />;
    }
    if (title === 'Hospitals') {
      return active ? <IconHospitalActive /> : <IconHospital />;
    }
    return <IconDoctor />;
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const getStyles = <T extends TabItemProps>(active: T['active']) => {
  return StyleSheet.create({
    container: {alignItems: 'center'},
    text: {
      fontSize: 10,
      color: active ? colors.text.menuActive : colors.text.menuInactive,
      fontFamily: fonts.primary[600],
      marginTop: 4,
    },
  });
};
