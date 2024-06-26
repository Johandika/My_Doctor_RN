import {StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Gap, Header, List, Profile} from '../../components';
import {NavigationPropsStack} from '../../../declarations';
import {getData, showError} from '../../utils';
import {ILemptyprofileImage} from '../../assets';
import {auth} from '../../config';
import {signOut} from 'firebase/auth';

const UserProfile = ({navigation}: NavigationPropsStack) => {
  const [profile, setProfile] = useState({
    fullName: '',
    profession: '',
    photo: ILemptyprofileImage,
  });

  useEffect(() => {
    getData('user').then(res => {
      const data = res;
      data.photo = {uri: res.photo};
      setProfile(data);
    });
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Jika signout sukses, menavigasi ke getstarted
        navigation.replace('GetStarted');
      })
      .catch(error => {
        showError(error.message);
      });
  };

  return (
    <View style={styles.page}>
      <Header
        title={'Profile'}
        onPress={() => navigation.navigate('MainApp')}
      />
      <Gap size={10} />
      <View>
        {profile.fullName.length > 0 && (
          <Profile
            name={profile.fullName}
            description={profile.profession}
            photo={profile.photo}
          />
        )}
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
          name="Sign Out"
          description="Last Update Yesterday"
          type="next"
          icon="help"
          onPress={handleSignOut}
        />
      </View>
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: 'white'},
});
