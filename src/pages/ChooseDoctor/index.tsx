import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Header, List} from '../../components';
import {doctor1, doctor2, doctor3} from '../../assets';
import {colors, showError} from '../../utils';
import {NavigationProps} from '../../../declarations';
import {equalTo, get, orderByChild, query, ref} from 'firebase/database';
import {database} from '../../config';

interface Route {
  key: string;
  name: string;
  params: string;
  path: string | null;
}

interface ChooseDoctorProps {
  navigation: NavigationProps;
  route: Route;
}

const ChooseDoctor: React.FC<ChooseDoctorProps> = ({navigation, route}) => {
  const [listDoctor, setListDoctor] = useState<any[]>([]);
  const categoryDoctor = route.params;

  useEffect(() => {
    callDoctorByCategory(categoryDoctor.category);
  }, [categoryDoctor.category]);

  const callDoctorByCategory = (category: string) => {
    const categoryQuery = query(
      ref(database, 'doctors/'),
      orderByChild('category'),
      equalTo(category),
    );

    get(categoryQuery)
      .then(snapshot => {
        if (snapshot.val()) {
          const oldData = snapshot.val();
          const data = [];

          Object.keys(oldData).map(item => {
            data.push({
              id: item,
              data: oldData[item],
            });
          });

          setListDoctor(data);
        } else {
          console.log('Tidak ada data dokter dengan kategori', category);
        }
      })
      .catch(err => {
        showError(err.message);
        console.log('gagal callDoctorByCategory');
      });
  };

  return (
    <View style={styles.page}>
      <Header
        title={`Pilih ${categoryDoctor.category}`}
        type={'dark'}
        onPress={() => navigation.goBack()}
      />
      {listDoctor.length > 0 ? ( // Cek apakah listDoctor tidak kosong
        listDoctor.map(doctor => (
          <List
            key={doctor.id}
            name={doctor.data.fullName}
            picture={{uri: doctor.data.photo}}
            description={doctor.data.gender}
            type={'next'}
            onPress={() => navigation.navigate('Chatting')}
          />
        ))
      ) : (
        <Text>Tidak ada data dokter terdaftar</Text>
      )}

      {/* <List
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
      /> */}
    </View>
  );
};

export default ChooseDoctor;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
});
