import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ILemptyprofileImage} from '../../../assets';
import {colors, fonts, getData} from '../../../utils';

interface HomeProfileProps {
  onPress: (event: GestureResponderEvent) => void;
}

const HomeProfile: React.FC<HomeProfileProps> = ({navigation, onPress}) => {
  const [profile, setProfile] = useState({
    photo: ILemptyprofileImage,
    fullName: '',
    profession: '',
  });

  useEffect(() => {
    getData('user').then(res => {
      const data = res;
      data.photo = {uri: res.photo};
      setProfile(data);
      console.log('Laman Home Profile dirender');
      console.log('data laman utama :', data);
      // console.log('foto laman utamaa :', data.photo.uri);
    });
  }, []);

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={profile.photo} style={styles.image} />
      <View>
        <Text style={styles.name}>{profile.fullName}</Text>
        <Text style={styles.profession}>{profile.profession}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({
  container: {flexDirection: 'row'},
  image: {width: 46, height: 46, borderRadius: 46 / 2, marginRight: 12},
  name: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    textTransform: 'capitalize',
  },
  profession: {
    fontSize: 12,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
    textTransform: 'capitalize',
  },
});
