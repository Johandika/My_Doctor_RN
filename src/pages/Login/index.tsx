import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ILmydoctorlogo} from '../../assets';
import {Button, Gap, Input, Link} from '../../components/atoms';
import {NavigationPropsStack} from '../../../declarations';
import {showError, showSuccess, storeData, useForm} from '../../utils';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth, dbRef} from '../../config';
import {child, get} from 'firebase/database';
import {useDispatch} from 'react-redux';
import {setLoading} from '../../redux/slices';

const Login = ({navigation}: NavigationPropsStack) => {
  const [form, setForm] = useForm({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(setLoading(true));

    signInWithEmailAndPassword(auth, form.email, form.password)
      .then(result => {
        // Get data dari firebase sekali
        get(child(dbRef, `users/${result.user.uid}/`)).then(snapshot => {
          if (snapshot.exists()) {
            // simpan data di localstorage, tapi password jangan ikut di simpan
            storeData('user', snapshot.val());
          }
        });

        dispatch(setLoading(false));
        setForm('reset');
      })
      .catch(error => {
        const errorMessage = error.message.replace('Firebase: ', '');
        console.log(error);
        showError(errorMessage);

        dispatch(setLoading(false));
        setForm('reset');
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
