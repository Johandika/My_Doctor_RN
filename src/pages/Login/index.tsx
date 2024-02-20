import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ILmydoctorlogo} from '../../assets';
import {Button, Gap, Input, Link} from '../../components/atoms';

const Login = ({navigation}: any) => {
  return (
    <View style={styles.page}>
      <ILmydoctorlogo width={90} height={90} fill="#0078FF" />
      <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
      <Input label="Email Address" />
      <Gap size={24} />
      <Input label="Password" />
      <Gap size={10} />
      <Link title={'Forgot My Password?'} size={12} />
      <Gap size={40} />
      <Button title="Sign In" onPress={() => navigation.replace('MainApp')} />
      <Gap size={30} />
      <Link
        title={'Create New Account'}
        size={16}
        align="center"
        onPress={() => navigation.navigate('Register')}
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {padding: 25},
  title: {
    fontSize: 20,
    fontFamily: 'Nunito-SemiBold',
    color: '#112340',
    marginTop: 40,
    marginBottom: 40,
    maxWidth: 200,
  },
});
