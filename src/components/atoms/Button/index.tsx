import React from 'react';
import {StyleSheet, Text, TouchableOpacity, ViewStyle} from 'react-native';
import {colors} from '../../../utils';

interface ButtonProps {
  type?: 'default' | 'secondary';
  title: string;
  onPress: () => void;
  style?: ViewStyle;
}

const Button: React.FC<ButtonProps> = ({
  type = 'default',
  title,
  onPress,
  style,
}) => {
  const styles = getStyles(type, style);

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const getStyles = (type: 'default' | 'secondary', style?: ViewStyle) => {
  return StyleSheet.create({
    container: {
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: colors.button.primary.background,
      backgroundColor:
        type === 'secondary'
          ? colors.button.primary.text
          : colors.button.primary.background,
      ...style,
    },
    text: {
      fontSize: 18,
      fontFamily: 'Nunito-SemiBold',
      textAlign: 'center',
      color:
        type === 'secondary'
          ? colors.button.secondary.text
          : colors.button.primary.text,
      ...style,
    },
  });
};

export default Button;
