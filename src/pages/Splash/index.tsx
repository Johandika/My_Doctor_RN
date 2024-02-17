import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {ILmydoctorlogo} from '../../assets';
import {StackNavigationProp} from '@react-navigation/stack';

interface SplashProps {
  navigation: StackNavigationProp<any, 'Splash'>; // Sesuaikan dengan jenis navigasi Anda
}

const Splash: React.FC<SplashProps> = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('GetStarted'); // replace tidak akan bisa back , beda dgn navigate
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
