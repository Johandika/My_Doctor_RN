import {StyleSheet, Image, View, Text} from 'react-native';
import React from 'react';
import {Button, Gap, Header, Link} from '../../components';
import {ILemptyprofileImage, IconAddPhoto} from '../../assets';
import {colors, fonts} from '../../utils';

const UploadPhoto = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Upload Photo" onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <View style={styles.profileContent}>
          <View style={styles.avatarWrapper}>
            <Image source={ILemptyprofileImage} style={styles.avatar} />

            <View style={styles.iconContainer}>
              <IconAddPhoto width={30} height={30} />
            </View>
          </View>
          <Text style={styles.name}>Shayna Melinda</Text>
          <Text style={styles.profession}>Product Designer</Text>
        </View>
        <View>
          <Button title="Upload and Continue" />
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
