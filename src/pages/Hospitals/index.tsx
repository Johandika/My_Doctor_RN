import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';
import {ILhospitalbg, dataHospital} from '../../assets';
import {colors, fonts} from '../../utils';
import {ListHospital} from '../../components';

const Hospitals = () => {
  return (
    <View style={styles.page}>
      <ImageBackground source={ILhospitalbg} style={styles.background}>
        <Text style={styles.title}>Nearby Hospital</Text>
        <Text style={styles.desc}>3 Tersedia</Text>
      </ImageBackground>
      <View style={styles.content}>
        {dataHospital.map(hospital => (
          <ListHospital
            key={hospital.id}
            type={hospital.type}
            picture={hospital.picture}
            name={hospital.name}
            address={hospital.address}
          />
        ))}
      </View>
    </View>
  );
};

export default Hospitals;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.secondary, flex: 1},
  background: {height: 240, paddingTop: 30},
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.white,
    textAlign: 'center',
  },
  desc: {
    fontSize: 14,
    fontFamily: fonts.primary[300],
    color: colors.white,
    marginTop: 6,
    textAlign: 'center',
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderRadius: 20,
    marginTop: -30,
    paddingTop: 14,
  },
});
