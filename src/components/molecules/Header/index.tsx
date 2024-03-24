import {GestureResponderEvent, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Gap} from '../../atoms';
import {colors} from '../../../utils';
import DarkProfile from './DarkProfile';

interface HeaderProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  type?: 'dark' | 'light' | 'dark-profile';
  description?: string;
}

const Header: React.FC<HeaderProps> = ({
  title,
  onPress,
  type = 'light',
  description,
}) => {
  const styles = getStyles(type);

  if (type === 'dark-profile') {
    return (
      <DarkProfile title={title} description={description} onPress={onPress} />
    );
  }
  return (
    <View style={styles.container}>
      <Button
        type="icon-only"
        icon={type === 'dark' ? 'back-light' : 'back-dark'}
        onPress={onPress}
      />
      <Text style={styles.text}>{title}</Text>
      <Gap size={24} direction="horizontal" />
    </View>
  );
};

export default Header;

const getStyles = <T extends HeaderProps>(type: T['type']) => {
  return StyleSheet.create({
    container: {
      paddingHorizontal: 16,
      paddingVertical: 30,
      backgroundColor: type === 'dark' ? colors.secondary : colors.white,
      flexDirection: 'row',
      alignItems: 'center',
      borderBottomLeftRadius: type === 'dark' ? 20 : 0,
      borderBottomRightRadius: type === 'dark' ? 20 : 0,
    },
    text: {
      flex: 1,
      fontFamily: 'Nunito-SemiBold',
      fontSize: 20,
      color: type === 'dark' ? colors.white : colors.text.primary,
      textAlign: 'center',
    },
  });
};
