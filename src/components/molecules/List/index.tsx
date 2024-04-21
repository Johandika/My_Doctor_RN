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
import {
  IconChevronRight,
  IconEditProfile,
  IconHelp,
  IconLanguage,
  IconRate,
} from '../../../assets';

interface ListProps {
  name: string;
  description: string;
  picture?: ImageSourcePropType;
  type?: 'next';
  onPress: (event: GestureResponderEvent) => void;
  icon?: 'edit-profile' | 'language' | 'rate' | 'help';
}

const List: React.FC<ListProps> = ({
  picture,
  name,
  description,
  type,
  onPress,
  icon,
}) => {
  const Icon = () => {
    if (icon === 'edit-profile') {
      return <IconEditProfile width={20} height={20} fill={colors.primary} />;
    }
    if (icon === 'language') {
      return <IconLanguage width={20} height={20} fill={colors.primary} />;
    }
    if (icon === 'rate') {
      return <IconRate width={20} height={20} fill={colors.primary} />;
    }
    if (icon === 'help') {
      return <IconHelp width={20} height={20} fill={colors.primary} />;
    }
    return <IconEditProfile />;
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {icon ? <Icon /> : <Image source={picture} style={styles.avatar} />}
      <View style={styles.wrapperText}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      {type === 'next' && <IconChevronRight />}
    </TouchableOpacity>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  wrapperText: {flex: 1, marginLeft: 16},
  avatar: {width: 46, height: 46, borderRadius: 46 / 2},
  name: {
    fontSize: 16,
    fontFamily: fonts.primary.normal,
    color: colors.text.primary,
  },
  description: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.secondary,
    textTransform: 'capitalize',
  },
});
