import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Input, Button, Header, Gap, Loading} from '../../components';
import {colors, useForm} from '../../utils';
import {FirebaseAuth} from '../../config';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {showMessage, hideMessage} from 'react-native-flash-message';

const Register = ({navigation}: any) => {
  const [form, setForm] = useForm({
    fullName: '',
    profession: '',
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);

  const onContinue = () => {
    setLoading(true);

    createUserWithEmailAndPassword(FirebaseAuth, form.email, form.password)
      .then(success => {
        console.log('Success Register :', success);

        setLoading(false);
        showMessage({
          message: 'Register Success',
          type: 'success',
          backgroundColor: 'green',
          color: colors.white,
        });

        setForm('reset');
      })
      .catch(error => {
        const errorMessage = error.message.replace('Firebase: ', '');
        console.log('Error Register :', error);

        setLoading(false);
        // setForm('reset');
        showMessage({
          message: errorMessage,
          type: 'default',
          backgroundColor: colors.error,
          color: colors.white,
        });
      });
    // navigation.navigate('UploadPhoto');
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
