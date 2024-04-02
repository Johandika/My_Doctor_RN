import {StyleSheet, TextInput, Text, View} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../../utils';

interface InputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  value,
  onChangeText,
  secureTextEntry,
}) => {
  const [border, setBorder] = useState(colors.border);
  const styles = getStyles(border);

  const onFocusForm = () => {
    setBorder(colors.primary);
  };

  const onBlurForm = () => {
    setBorder(colors.border);
  };

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        onFocus={onFocusForm}
        onBlur={onBlurForm}
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const getStyles = (border: string) => {
  return StyleSheet.create({
    input: {borderWidth: 1, borderColor: border, padding: 12},
    label: {
      fontSize: 16,
      color: colors.text.secondary,
      marginBottom: 6,
      fontFamily: 'Nunito-Regular',
    },
  });
};

export default Input;
