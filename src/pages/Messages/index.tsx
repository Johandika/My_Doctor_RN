import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {List} from '../../components';
import {colors, fonts} from '../../utils';
import {doctor1, doctor2, doctor3} from '../../assets';

const Messages = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.title}>Messages</Text>
        <List
          name={'Jonathan Freze'}
          description="Hai Dok, saya ingin bertanya mengenai penyakit..."
          picture={doctor1}
          onPress={() => navigation.navigate('Chatting')}
        />
        <List
          name={'Sheina Melinda'}
          description="Hai Dok, saya ingin bertanya mengenai penyakit..."
          picture={doctor2}
          onPress={() => navigation.navigate('Chatting')}
        />
        <List
          name={'Simon'}
          description="Hai Dok, saya ingin bertanya mengenai penyakit..."
          picture={doctor3}
          onPress={() => navigation.navigate('Chatting')}
        />
      </View>
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.secondary, flex: 1},
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginLeft: 16,
  },
});
