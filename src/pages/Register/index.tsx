import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Input, Button} from '../../components/atoms';
import {Header} from '../../components/molecules';
import {colors} from '../../utils';
import {Gap} from '../../components/atoms';

const Register = ({navigation}: any) => {
  return (
    <View style={styles.page}>
      <Header title="Daftar" onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <Input label="Full Name" />
        <Gap size={24} />
        <Input label="Job" />
        <Gap size={24} />
        <Input label="Email Address" />
        <Gap size={24} />
        <Input label="Password" />
        <Gap size={40} />
        <Button
          title="Continue"
          onPress={() => navigation.navigate('UploadPhoto')}
        />
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
  content: {padding: 25, paddingTop: 0},
});
