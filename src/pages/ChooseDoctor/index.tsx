import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Header, ListDoctor} from '../../components';
import {doctor1, doctor2, doctor3} from '../../assets';
import {colors} from '../../utils';

const ChooseDoctor = ({navigation}: any) => {
  return (
    <View style={styles.page}>
      <Header
        title="Pilih Dokter Anak"
        type={'dark'}
        onPress={() => navigation.goBack()}
      />
      <ListDoctor
        picture={doctor1}
        name={'Ronald Sued'}
        description={'Laki-laki'}
        type={'next'}
      />
      <ListDoctor
        picture={doctor2}
        name={'Sheirina Sheirin'}
        description={'Perempuan'}
        type={'next'}
      />
      <ListDoctor
        picture={doctor3}
        name={'Putradi Sumar'}
        description={'Laki-laki'}
        type={'next'}
      />
    </View>
  );
};

export default ChooseDoctor;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
});
