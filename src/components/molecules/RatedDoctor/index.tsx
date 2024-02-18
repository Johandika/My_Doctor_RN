import {StyleSheet, Text, View, Image, ImageSourcePropType} from 'react-native';
import React from 'react';
import {IconStar} from '../../../assets';
import {colors, fonts} from '../../../utils';

interface ListDoctorProps {
  category: string;
  name: string;
  picture: ImageSourcePropType;
}

const RatedDoctor: React.FC<ListDoctorProps> = ({name, category, picture}) => {
  return (
    <View style={styles.container}>
      <Image source={picture} style={styles.avatar} />
      <View style={styles.profile}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.category}>{category}</Text>
      </View>
      <View style={styles.rate}>
        <IconStar width={12} height={12} />
        <IconStar width={12} height={12} />
        <IconStar width={12} height={12} />
        <IconStar width={12} height={12} />
        <IconStar width={12} height={12} />
      </View>
    </View>
  );
};

export default RatedDoctor;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 16,
    alignItems: 'center',
  },
  avatar: {width: 50, height: 50, borderRadius: 50 / 2, marginRight: 12},
  profile: {flex: 1},
  name: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  category: {
    fontSize: 12,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
  },
  rate: {flexDirection: 'row'},
});
