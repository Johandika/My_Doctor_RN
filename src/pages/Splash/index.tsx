import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {ILmydoctorlogo} from '../../assets';
import {NavigationPropsStack} from '../../../declarations';
import {onAuthStateChanged} from 'firebase/auth';
import {auth} from '../../config';
import 'firebase/auth';

const Splash = ({navigation}: NavigationPropsStack) => {
  useEffect(() => {
    // Sebenarnya di onAuth baru , gaperlu unsubscribe sepertinya, tapi tetap ngikut tutor jadi tetap di buat untuk unmount useEffectnya
    const unsubscribe = onAuthStateChanged(auth, user => {
      setTimeout(() => {
        if (user) {
          navigation.replace('MainApp');
        } else {
          navigation.replace('GetStarted');
        }
      }, 3000);
    });

    return () => unsubscribe();
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
