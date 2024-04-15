import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {ILmydoctorlogo} from '../../assets';
import {NavigationPropsStack} from '../../../declarations';
import {getIdToken, onAuthStateChanged} from 'firebase/auth';
import {auth} from '../../config';
import 'firebase/auth';
import {getData, storeData} from '../../utils';

const Splash = ({navigation}: NavigationPropsStack) => {
  useEffect(() => {
    setTimeout(() => {
      onAuthStateChanged(auth, async user => {
        if (user) {
          navigation.replace('MainApp');

          // getData('user').then(result =>
          //   console.log('data user splash :', result),
          // );
        } else {
          // console.log('sudah logout');
          navigation.replace('GetStarted');
          // console.log('user login :', user);
          // getData('user').then(result => console.log('dataLocal :', result));
        }
      });
    }, 3000);
  }, [navigation]);

  return (
    <View style={styles.page}>
      <ILmydoctorlogo width={90} height={90} fill="#0078FF" />
      <Text style={styles.title}>My Doctor</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: 'Nunito-SemiBold',
    color: '#112340',
    marginTop: 20,
  },
});
