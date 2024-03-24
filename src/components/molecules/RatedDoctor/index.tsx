import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';
import React from 'react';
import {IconStar} from '../../../assets';
import {colors, fonts} from '../../../utils';

interface RatedDoctor {
  category: string;
  name: string;
  picture: ImageSourcePropType;
  onPress: (event: GestureResponderEvent) => void;
}

const RatedDoctor: React.FC<RatedDoctor> = ({
  name,
  category,
  picture,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
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
    </TouchableOpacity>
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
