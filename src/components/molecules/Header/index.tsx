import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IconChevronLeft} from '../../../assets/icon';
import {Gap} from '../../atoms';
import {colors} from '../../../utils';

const Header = () => {
  return (
    <View style={styles.container}>
      <IconChevronLeft />
      <Text style={styles.text}>Header</Text>
      <Gap size={24} direction="horizontal" />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 30,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    flex: 1,
    fontFamily: 'Nunito-SemiBold',
    fontSize: 20,
    color: colors.text.primary,
    textAlign: 'center',
  },
});
