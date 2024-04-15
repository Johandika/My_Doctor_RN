import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ILmydoctorlogo} from '../../assets';
import {Button, Gap, Input, Link} from '../../components/atoms';
import {NavigationPropsStack} from '../../../declarations';
import {colors, getData, storeData, useForm} from '../../utils';
import {onAuthStateChanged, signInWithEmailAndPassword} from 'firebase/auth';
import {auth, database, dbRef} from '../../config';
import {showMessage} from 'react-native-flash-message';
import {Loading} from '../../components';
import {child, get} from 'firebase/database';

const Login = ({navigation}: NavigationPropsStack) => {
  const [form, setForm] = useForm({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);

    signInWithEmailAndPassword(auth, form.email, form.password)
      .then(result => {
        // Get data dari firebase sekali
        get(child(dbRef, `users/${result.user.uid}/`)).then(snapshot => {
          if (snapshot.exists()) {
            // simpan data di localstorage, tapi password jangan ikut di simpan
            // storeData('user', snapshot.val());
            console.log('snapshot1');
            showMessage({
              message: 'Login Success',
              type: 'success',
              backgroundColor: 'green',
              color: colors.white,
            });
            console.log('snapshot2');

            // Disini tidak ada menavigasi karena ketika sudah sign in , onAuthStateChanged akan otomatis di jalankan
          }
        });

        setLoading(false);
        // setForm('reset');
      })
      .catch(error => {
        const errorMessage = error.message.replace('Firebase: ', '');
        console.log(error);
        showMessage({
          message: errorMessage,
          type: 'default',
          backgroundColor: colors.error,
          color: colors.white,
        });

        setLoading(false);
        // setForm('reset');
      });
  };

  return (
    <>
      <View style={styles.page}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Gap size={25} />
          <ILmydoctorlogo width={90} height={90} fill="#0078FF" />
          <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
          <Input
            label="Email Address"
            value={form.email}
            onChangeText={value => setForm('email', value)}
          />
          <Gap size={24} />
          <Input
            label="Password"
            value={form.password}
            onChangeText={value => setForm('password', value)}
            secureTextEntry
          />
          <Gap size={10} />
          <Link title={'Forgot My Password?'} size={12} />
          <Gap size={40} />
          <Button title="Sign In" onPress={handleLogin} />
          <Gap size={30} />
          <Link
            title={'Create New Account'}
            size={16}
            align="center"
            onPress={() => navigation.navigate('Register')}
          />
        </ScrollView>
      </View>
      {loading && <Loading />}
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {paddingHorizontal: 25},
  title: {
    fontSize: 20,
    fontFamily: 'Nunito-SemiBold',
    color: '#112340',
    marginTop: 40,
    marginBottom: 40,
    maxWidth: 200,
  },
});
