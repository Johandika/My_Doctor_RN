import React from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {colors} from '../../../utils';
import IconOnly from './IconOnly';
import BtnIconSend from './BtnIconSend';

type IconType = 'back-dark' | 'back-light' | undefined;

interface ButtonProps {
  type?: 'default' | 'secondary' | 'icon-only' | 'btn-icon-send';
  title?: string;
  onPress: (event: GestureResponderEvent) => void;
  style?: ViewStyle;
  icon?: IconType;
  disable?: boolean | undefined;
}

const Button: React.FC<ButtonProps> = ({
  type = 'default',
  title,
  onPress,
  icon,
  style,
  disable,
}) => {
  const styles = getStyles(type, style);

  if (type === 'btn-icon-send') {
    return <BtnIconSend disable={disable || false} />;
  }

  if (type === 'icon-only') {
    return <IconOnly icon={icon} onPress={onPress} />;
  }

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const getStyles = <T extends ButtonProps>(
  type: T['type'],
  style?: ViewStyle,
) => {
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
