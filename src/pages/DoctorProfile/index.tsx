import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Gap, Header, Profile, ProfileItem} from '../../components';
import {NavigationProps} from '../../../declarations';

const DoctorProfile = ({navigation, route}: NavigationProps) => {
  const dataDoctor = route.params;

  return (
    <View style={styles.page}>
      <Header title="Doctor Profile" onPress={() => navigation.goBack()} />
      <Profile
        name={dataDoctor.fullName}
        description={dataDoctor.category}
        photo={{uri: dataDoctor.photo}}
      />
      <Gap size={10} />
      <ProfileItem label="Alumnus" value={dataDoctor.university} />
      <ProfileItem label="Tempat Praktik" value={dataDoctor.hospital_address} />
      <ProfileItem label="No. STR" value={dataDoctor.str_number} />
      <View style={styles.action}>
        <Button
          title="Start Consultation"
          onPress={() => navigation.navigate('Chatting')}
        />
      </View>
    </View>
  );
};

export default DoctorProfile;

const styles = StyleSheet.create({
  page: {backgroundColor: 'white', flex: 1},
  action: {paddingHorizontal: 40, paddingTop: 23},
});
