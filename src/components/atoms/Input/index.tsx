import {StyleSheet, TextInput, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../../utils';

interface InputProps {
  label: string;
}

const Input: React.FC<InputProps> = ({label}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {borderWidth: 1, borderColor: '#E9E9E9', padding: 12},
  label: {
    fontSize: 16,
    color: colors.text.secondary,
    marginBottom: 6,
    fontFamily: 'Nunito-Regular',
  },
});

export default Input;
