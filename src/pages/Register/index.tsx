import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Input, Button, Header, Gap, Loading} from '../../components';
import {
  colors,
  getData,
  showError,
  showSuccess,
  storeData,
  useForm,
} from '../../utils';
import {auth, database} from '../../config';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import 'firebase/database';
import {ref, set} from 'firebase/database';
import {NavigationProps} from '../../../declarations';

const Register = ({navigation}: NavigationProps) => {
  const [form, setForm] = useForm({
    fullName: '',
    profession: '',
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);

  const onContinue = () => {
    setLoading(true);

    // Authentikasi di Firebase
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then(success => {
        const data = {
          fullName: form.fullName,
          profession: form.profession,
          email: form.email,
          uid: success.user.uid,
        };

        //https://firebase.com/users/i3wc9Kw/
        set(ref(database, 'users/' + success.user.uid + '/'), data);

        showSuccess('Register Success');

        // simpan data di localstorage, tapi password jangan ikut di simpan
        storeData('user', data);
        getData('user').then(result => console.log('dataLocal :', result));

        // Pindah ke laman upload foto dan kirim parameter
        navigation.navigate('UploadPhoto', data);

        setLoading(false);
        setForm('reset');
      })
      .catch(error => {
        const errorMessage = error.message.replace('Firebase: ', '');
        console.log('Error Register :', error);

        showError(errorMessage);

        setLoading(false);
        setForm('reset');
      });
  };

  return (
    <>
      <View style={styles.page}>
        <Header title="Daftar" onPress={() => navigation.goBack()} />
        <View style={styles.content}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Input
              label="Full Name"
              value={form.fullName}
              onChangeText={value => setForm('fullName', value)}
            />
            <Gap size={24} />
            <Input
              label="Job"
              value={form.profession}
              onChangeText={value => setForm('profession', value)}
            />
            <Gap size={24} />
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
            <Gap size={40} />
            <Button title="Continue" onPress={onContinue} />
          </ScrollView>
        </View>
      </View>
      {loading && <Loading />}
    </>
  );
};

export default Register;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
  content: {padding: 25, paddingTop: 0},
});
