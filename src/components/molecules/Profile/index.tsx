import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ILemptyprofile, dummyUser} from '../../../assets';
import {colors, fonts} from '../../../utils';

interface ProfileProps {
  name?: string;
  description?: string;
  iconRemove?: boolean;
}

const Profile: React.FC<ProfileProps> = ({name, description, iconRemove}) => {
  return (
    <View style={styles.container}>
      <View style={styles.borderProfile}>
        <Image source={dummyUser} style={styles.avatar} />
        {iconRemove && (
          <ILemptyprofile style={styles.removePhoto} width={30} height={30} />
        )}
      </View>
      {name && <Text style={styles.name}>{name}</Text>}
      {description && <Text style={styles.proffesion}>{description}</Text>}
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {width: 110, height: 110, borderRadius: 110 / 2},
  borderProfile: {
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
    borderColor: colors.border,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  name: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 16,
  },
  proffesion: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.secondary,
    marginTop: 2,
  },
  removePhoto: {
    position: 'absolute',
    right: 8,
    bottom: 8,
  },
});
