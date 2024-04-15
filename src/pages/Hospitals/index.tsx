import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ILhospitalbg} from '../../assets';
import {colors, fonts, showError} from '../../utils';
import {ListHospital} from '../../components';
import {child, get} from 'firebase/database';
import {dbRef} from '../../config';

interface HospitalsItem {
  id: number;
  type: string;
  image: string;
  name: string;
  address: string;
}

const Hospitals = () => {
  const [dataHospital, setDataHospital] = useState<HospitalsItem[]>([]);

  useEffect(() => {
    get(child(dbRef, `hospitals/`))
      .then(snapshot => {
        if (snapshot.exists()) {
          setDataHospital(snapshot.val());
        }
      })
      .catch(err => {
        showError(err.message);
      });
  }, []);

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
            picture={hospital.image}
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
