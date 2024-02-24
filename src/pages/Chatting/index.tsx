import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Header, ChatItem, InputChat} from '../../components';
import {StackNavigationProp} from '@react-navigation/stack';

interface ChattingProps {
  navigation: StackNavigationProp<any, 'Chatting'>; // Sesuaikan dengan jenis navigasi Anda
}

const Chatting: React.FC<ChattingProps> = ({navigation}) => {
  return (
    <View>
      <Header
        type={'dark-profile'}
        onPress={() => navigation.goBack()}
        title="Ronald Sued"
      />
      <Text>Senin, 21 Maret 2020</Text>
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <InputChat />
    </View>
  );
};

export default Chatting;

const styles = StyleSheet.create({});
