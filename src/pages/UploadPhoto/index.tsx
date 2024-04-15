import {StyleSheet, Image, View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Button, Gap, Header, Link} from '../../components';
import {ILemptyprofile, ILemptyprofileImage, IconAddPhoto} from '../../assets';
import {colors, fonts, showError, storeData} from '../../utils';
import {launchImageLibrary} from 'react-native-image-picker';
import {database} from '../../config';
import {ref, update} from 'firebase/database';

const UploadPhoto = ({navigation, route}) => {
  const {fullName, profession, uid} = route.params;
  const [hasPhoto, setHasPhoto] = useState(false);
  const [photo, setPhoto] = useState(ILemptyprofileImage);
  const [photoForDB, setPhotoForDB] = useState('');

  const getImageFromGallery = () => {
    // quality gambar dibuat 50% dari aslinya
    launchImageLibrary(
      {quality: 0.5, maxWidth: 200, maxHeight: 200, includeBase64: true},
      response => {
        console.log('response :', response);

        if (response.didCancel || response.errorCode) {
          showError('Anda masih belum mengupload foto');
        } else {
          setPhotoForDB(
            `data:${response.assets[0].type};base64, ${response.assets[0].base64}`,
          );

          const source = {uri: response.assets[0].uri};
          setPhoto(source);
          setHasPhoto(true);
        }
      },
    );
  };

  const uploadAndContinue = () => {
    update(ref(database, 'users/' + uid + '/'), {photo: photoForDB});

    const data = route.params;
    data.photo = photoForDB;

    storeData('user', data);
    navigation.replace('MainApp');
  };

  return (
    <View style={styles.page}>
      <Header title="Upload Photo" onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <View style={styles.profileContent}>
          <TouchableOpacity
            style={styles.avatarWrapper}
            onPress={getImageFromGallery}>
            <Image source={photo} style={styles.avatar} />

            <View style={styles.iconContainer}>
              {hasPhoto && <ILemptyprofile width={30} height={30} />}
              {!hasPhoto && <IconAddPhoto width={30} height={30} />}
            </View>
          </TouchableOpacity>
          <Text style={styles.name}>{fullName}</Text>
          <Text style={styles.profession}>{profession}</Text>
        </View>
        <View>
          <Button
            disable={!hasPhoto}
            title="Upload and Continue"
            onPress={uploadAndContinue}
          />
          <Gap size={20} />
          <Link
            title="Skip for this"
            size={16}
            align="center"
            onPress={() => navigation.replace('MainApp')}
          />
        </View>
      </View>
    </View>
  );
};

export default UploadPhoto;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: colors.white},
  content: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    paddingBottom: 40,
  },
  profileContent: {alignItems: 'center', flex: 1, justifyContent: 'center'},
  avatar: {width: 110, height: 110, borderRadius: 110 / 2},
  avatarWrapper: {
    width: 130,
    height: 130,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 130 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    borderRadius: 30,
    position: 'absolute',
    bottom: 8,
    right: 6,
    borderWidth: 4,
    borderColor: colors.white,
  },
  name: {
    fontSize: 24,
    color: colors.text.primary,
    fontFamily: fonts.primary[600],
    textAlign: 'center',
  },
  profession: {
    fontSize: 18,
    fontFamily: fonts.primary.normal,
    textAlign: 'center',
    color: colors.text.secondary,
    marginTop: 4,
  },
});
