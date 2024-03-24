import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IconIconSendLight, IconSendDark} from '../../../assets';
import {colors} from '../../../utils';

interface BtnIconProps {
  disable: boolean | false;
}

const BtnIconSend: React.FC<BtnIconProps> = ({disable}) => {
  const styles = getStyles(disable);

  return (
    <View style={styles.container}>
      {disable && <IconSendDark />}
      {!disable && <IconIconSendLight />}
    </View>
  );
};

export default BtnIconSend;

const getStyles = <T extends BtnIconProps>(disable: T['disable']) => {
  return StyleSheet.create({
    container: {
      backgroundColor: disable ? colors.disable : colors.primary,
      width: 45,
      height: 45,
      borderRadius: 10,
      paddingTop: 8,
      paddingRight: 8,
      paddingBottom: 8,
      paddingLeft: 8,
    },
  });
};
