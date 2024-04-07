import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Gap, Header, Input, Profile} from '../../components';
import {NavigationProps} from '.../../../declarations';

const UpdateProfile = ({navigation}: NavigationProps) => {
  return (
    <View style={styles.page}>
      <Header
        title={'Edit Profile'}
        onPress={() => {
          navigation.goBack();
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Profile iconRemove />
          <Gap size={26} />
          <Input label="Nama Lengkap" />
          <Gap size={24} />
          <Input label="Pekerjaan" />
          <Gap size={24} />
          <Input label="Email" />
          <Gap size={24} />
          <Input label="Password" />
          <Gap size={40} />
          <Button
            title="Simpan Profile"
            onPress={() => navigation.goBack('UserProfile')}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default UpdateProfile;

const styles = StyleSheet.create({
  page: {backgroundColor: 'white'},
  content: {padding: 40, paddingTop: 0},
});
