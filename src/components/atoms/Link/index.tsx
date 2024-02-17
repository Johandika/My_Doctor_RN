import {StyleSheet, Text, View, ViewStyle} from 'react-native';
import React from 'react';

interface LinkProps {
  title: string;
  size: number;
  align?: 'auto' | 'left' | 'right' | 'center' | 'justify' | undefined;
}

const Link: React.FC<LinkProps> = ({title, size, align}) => {
  const styles = getStyles(size, align);
  return (
    <View>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const getStyles = <T extends LinkProps>(size: T['size'], align: T['align']) => {
  return StyleSheet.create({
    text: {
      color: '#7D8797',
      fontFamily: 'Nunito-Regular',
      textDecorationLine: 'underline',
      fontSize: size,
      textAlign: align,
    },
  });
};

export default Link;
