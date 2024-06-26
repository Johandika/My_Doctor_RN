import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Header, ChatItem, InputChat} from '../../components';
import {colors, fonts} from '../../utils';
import {NavigationProps} from '../../../declarations';

const Chatting = ({navigation}: NavigationProps) => {
  return (
    <View style={styles.page}>
      <Header
        type={'dark-profile'}
        onPress={() => navigation.goBack()}
        title="Ronald Sued"
        description="Dokter Anak"
      />
      <View style={styles.content}>
        <Text style={styles.chatDate}>Senin, 21 Maret 2020</Text>
        <ChatItem isMe />
        <ChatItem />
        <ChatItem isMe />
      </View>
      <InputChat />
    </View>
  );
};

export default Chatting;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
  chatDate: {
    fontSize: 11,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginVertical: 20,
    textAlign: 'center',
  },
  content: {flex: 1},
});
