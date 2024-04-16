import {
  GestureResponderEvent,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {ILcatdokobat, ILcatdokpsikiater, ILcatdokumum} from '../../../assets';
import {colors, fonts} from '../../../utils';
import {SvgUri} from 'react-native-svg';

interface DoctorCategoryProps {
  category: string;
  picture: string;
  onPress: (event: GestureResponderEvent) => void;
}

const DoctorCategory: React.FC<DoctorCategoryProps> = ({
  category,
  picture,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <SvgUri uri={picture} style={styles.illustration} />
      <Text style={styles.label}>Saya butuh</Text>
      <Text style={styles.category}>{category}</Text>
    </TouchableOpacity>
  );
};

export default DoctorCategory;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: colors.cardLight,
    alignSelf: 'flex-start',
    borderRadius: 10,
    marginRight: 10,
    width: 100,
  },
  illustration: {marginBottom: 28, width: 46, height: 46},
  label: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.primary,
  },
  category: {
    fontSize: 12,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
});
