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
import {colors, fonts} from '../../../utils';
import {IconChevronRight} from '../../../assets';

interface ListDoctorProps {
  name: string;
  description: string;
  picture: ImageSourcePropType;
  type?: 'next';
  onPress: (event: GestureResponderEvent) => void;
}

const ListDoctor: React.FC<ListDoctorProps> = ({
  picture,
  name,
  description,
  type,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={picture} style={styles.avatar} />
      <View style={styles.wrapperText}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      {type === 'next' && <IconChevronRight />}
    </TouchableOpacity>
  );
};

export default ListDoctor;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  wrapperText: {flex: 1},
  avatar: {width: 46, height: 46, borderRadius: 46 / 2, marginRight: 12},
  name: {
    fontSize: 16,
    fontFamily: fonts.primary.normal,
    color: colors.text.primary,
  },
  description: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.secondary,
  },
});
