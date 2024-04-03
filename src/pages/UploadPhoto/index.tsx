import {StyleSheet, Image, View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Button, Gap, Header, Link} from '../../components';
import {ILemptyprofile, ILemptyprofileImage, IconAddPhoto} from '../../assets';
import {colors, fonts} from '../../utils';
import {launchImageLibrary} from 'react-native-image-picker';

const UploadPhoto = ({navigation}) => {
  const [hasPhoto, setHasPhoto] = useState(false);
  const [photo, setPhoto] = useState(ILemptyprofileImage);

  const getImageFromGallery = () => {
    launchImageLibrary({}, response => {
      console.log('response :', response);
      const source = {uri: response.assets[0].uri};
      setPhoto(source);
    });
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
          <Text style={styles.name}>Shayna Melinda</Text>
          <Text style={styles.profession}>Product Designer</Text>
        </View>
        <View>
          <Button
            disable
            title="Upload and Continue"
            onPress={() => navigation.replace('MainApp')}
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
  avatar: {width: 110, height: 110},
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
