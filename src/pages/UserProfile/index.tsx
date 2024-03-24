import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Gap, Header, List, Profile} from '../../components';

const UserProfile = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Profile" onPress={() => navigation.goBack()} />
      <Gap size={10} />
      <View>
        <Profile name="Shayna Melinda" description="Product Designer" />
        <Gap size={14} />
        <List
          name="Edit Profile"
          description="Last Update Yesterday"
          type="next"
          icon="edit-profile"
          onPress={() => navigation.navigate('UpdateProfile')}
        />
        <List
          name="Language"
          description="Last Update Yesterday"
          type="next"
          icon="language"
          onPress={() => {}}
        />
        <List
          name="Rate"
          description="Last Update Yesterday"
          type="next"
          icon="rate"
          onPress={() => {}}
        />
        <List
          name="Help"
          description="Last Update Yesterday"
          type="next"
          icon="help"
          onPress={() => {}}
        />
      </View>
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: 'white'},
});
