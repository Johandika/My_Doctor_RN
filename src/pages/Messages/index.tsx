import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ListDoctor} from '../../components';
import {colors, fonts} from '../../utils';
import {doctor1, doctor2, doctor3} from '../../assets';

const Messages = () => {
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.title}>Messages</Text>
        <ListDoctor
          name={'Jonathan Freze'}
          description="Hai Dok, saya ingin bertanya mengenai penyakit..."
          picture={doctor1}
        />
        <ListDoctor
          name={'Sheina Melinda'}
          description="Hai Dok, saya ingin bertanya mengenai penyakit..."
          picture={doctor2}
        />
        <ListDoctor
          name={'Simon'}
          description="Hai Dok, saya ingin bertanya mengenai penyakit..."
          picture={doctor3}
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
