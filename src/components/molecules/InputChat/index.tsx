import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';
import {Button} from '../../../components';

const InputChat = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Tulis pesan untuk Nairobi" />
      <Button type="btn-icon-send" onPress={() => {}} />
    </View>
  );
};

export default InputChat;

const styles = StyleSheet.create({
  container: {padding: 16, flexDirection: 'row'},
  input: {
    backgroundColor: colors.border,
    padding: 14,
    borderRadius: 10,
    flex: 1,
    marginRight: 10,
    fontFamily: fonts.primary.normal,
    maxHeight: 45,
  },
});
