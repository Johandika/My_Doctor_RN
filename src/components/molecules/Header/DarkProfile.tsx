import {
  StyleSheet,
  Text,
  View,
  Image,
  GestureResponderEvent,
} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';
import {Button} from '../../../components';
import {doctor1} from '../../../assets';

interface HeaderProps {
  title: string;
  description?: string;
  onPress: (event: GestureResponderEvent) => void;
}

const DarkProfile: React.FC<HeaderProps> = ({title, description, onPress}) => {
  return (
    <View style={styles.container}>
      <Button type="icon-only" icon="back-light" onPress={onPress} />
      <View style={styles.content}>
        <Text style={styles.name}>{title}</Text>
        <Text style={styles.desc}>{description}</Text>
      </View>
      <Image source={doctor1} style={styles.avatar} />
    </View>
  );
};

export default DarkProfile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    paddingVertical: 30,
    paddingLeft: 20,
    paddingRight: 16,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {flex: 1},
  avatar: {width: 46, height: 46, borderRadius: 46 / 2},
  name: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.white,
    textAlign: 'center',
  },
  desc: {
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    marginTop: 6,
    textAlign: 'center',
    color: colors.text.subTitle,
  },
});
