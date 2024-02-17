import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button} from '../../components';
import {ILdoctorsplash, ILmydoctorlogo} from '../../assets';
import Gap from '../../components/atoms/Gap';
import {StackNavigationProp} from '@react-navigation/stack';

type RootStackParamList = {
  Register: undefined;
  Login: undefined;
  // ... (Tambahkan rute lain jika diperlukan)
};

interface GetStartedProps {
  navigation: StackNavigationProp<RootStackParamList>;
}

const GetStarted: React.FC<GetStartedProps> = ({navigation}) => {
  return (
    <ImageBackground source={ILdoctorsplash} style={styles.page}>
      <View>
        <ILmydoctorlogo width={70} height={70} fill="#0078FF" />
        <Text style={styles.title}>
          Konsultasi dengan dokter jadi lebih mudah dan fleksibel
        </Text>
      </View>
      <View>
        <Button
          title={'Get Started'}
          onPress={() => navigation.navigate('Register')} // navigate bisa di back kan, gunakan replace agar tidak bisa di back kan
        />
        <Gap size={12} />
        <Button
          title={'Sign In'}
          type="secondary"
          onPress={() => navigation.replace('Login')}
        />
      </View>
    </ImageBackground>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  page: {padding: 25, flex: 1, justifyContent: 'space-between'},
  title: {
    fontSize: 28,
    color: 'white',
    marginTop: 91,
    fontFamily: 'Nunito-SemiBold',
  },
});
