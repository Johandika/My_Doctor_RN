import {ScrollView, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Button, Gap, Header, Input, Profile} from '../../components';
import {NavigationPropsStack} from '.../../../declarations';
import {getData, showError, storeData} from '../../utils';
import {auth, database} from '../../config';
import {ref, update} from 'firebase/database';
import {launchImageLibrary} from 'react-native-image-picker';
import {onAuthStateChanged, updatePassword} from 'firebase/auth';
import {ILemptyprofileImage} from '../../assets';

const UpdateProfile = ({navigation}: NavigationPropsStack) => {
  const [profile, setProfile] = useState({
    fullName: '',
    profession: '',
    email: '',
    // photo: ILemptyprofileImage,
  });
  const [password, setPassword] = useState('');
  const [photo, setPhoto] = useState(ILemptyprofileImage);
  const [photoForDB, setPhotoForDB] = useState('');

  useEffect(() => {
    getData('user').then(res => {
      const data = res;
      data.photo = {uri: res.photo};
      setPhoto(data.photo);
      setProfile(data);
    });
  }, []);

  const handleUpdate = () => {
    if (password.length > 0) {
      if (password.length < 6) {
        showError('Password minimal harus 6 karakter');
      } else {
        handleUpdatePassword();
        updateProfileData();
        navigation.replace('MainApp');
      }
    } else {
      updateProfileData();
    }
  };

  const handleUpdatePassword = () => {
    // Update password
    onAuthStateChanged(auth, user => {
      if (user) {
        updatePassword(user, password)
          .then(() => {
            // Update successful.
            console.log('Update password berhasil');
          })
          .catch(error => {
            showError(error.message);
          });
      }
    });
  };

  const updateProfileData = () => {
    const data = profile;
    data.photo = photoForDB;

    update(ref(database, `users/${profile.uid}/`), data)
      .then(() => {
        console.log('success update data:', data);
        storeData('user', data);
        // navigasi harus diletak dalam asinkron agar setelah data di dapat baru terjadi navigasi
        navigation.replace('MainApp');
      })
      .catch(error => {
        showError(error.message);
      });
  };

  const changeText = (key: string, value: string) => {
    setProfile({...profile, [key]: value});
  };

  const getImage = () => {
    // quality gambar dibuat 50% dari aslinya
    launchImageLibrary(
      {quality: 0.5, maxWidth: 200, maxHeight: 200, includeBase64: true},
      response => {
        if (response.didCancel || response.errorCode) {
          showError('Anda masih belum mengupload foto');
        } else {
          const source = {uri: response.assets[0].uri};

          setPhotoForDB(
            `data:${response.assets[0].type};base64, ${response.assets[0].base64}`,
          );
          setPhoto(source);
          // L6AGmL7QmGMADrSAAAAAAAAAAAAAP/2Q== (foto hijau)
          // roeJkkirGylgkWxfxHrtNGUWtaSSZaS/P4y5JJBUkkkD/9k= (foto ruang tv)
        }
      },
    );
  };

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
          <Profile iconRemove isRemove photo={photo} onPress={getImage} />
          <Gap size={26} />
          <Input
            label="Nama Lengkap"
            value={profile.fullName}
            onChangeText={value => changeText('fullName', value)}
          />
          <Gap size={24} />
          <Input
            label="Pekerjaan"
            value={profile.profession}
            onChangeText={value => changeText('profession', value)}
          />
          <Gap size={24} />
          <Input label="Email" value={profile.email} disable />
          <Gap size={24} />
          <Input
            label="Password"
            value={password}
            onChangeText={value => setPassword(value)}
            secureTextEntry
          />
          <Gap size={40} />
          <Button title="Simpan Profile" onPress={handleUpdate} />
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
