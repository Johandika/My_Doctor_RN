import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Header, List} from '../../components';
import {doctor1, doctor2, doctor3} from '../../assets';
import {colors} from '../../utils';
import {NavigationProps} from '../../../declarations';

const ChooseDoctor = ({navigation}: NavigationProps) => {
  return (
    <View style={styles.page}>
      <Header
        title="Pilih Dokter Anak"
        type={'dark'}
        onPress={() => navigation.goBack()}
      />
      <List
        picture={doctor1}
        name={'Ronald Sued'}
        description={'Laki-laki'}
        type={'next'}
        onPress={() => navigation.navigate('Chatting')}
      />
      <List
        picture={doctor2}
        name={'Sheirina Sheirin'}
        description={'Perempuan'}
        type={'next'}
        onPress={() => navigation.navigate('Chatting')}
      />
      <List
        picture={doctor3}
        name={'Putradi Sumar'}
        description={'Laki-laki'}
        type={'next'}
        onPress={() => navigation.navigate('Chatting')}
      />
    </View>
  );
};

export default ChooseDoctor;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
});
