import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  DoctorCategory,
  Gap,
  HomeProfile,
  NewsItem,
  RatedDoctor,
} from '../../components';
import {colors, fonts, showError} from '../../utils';
import {dataDoctor} from '../../assets';
import {NavigationPropsStack} from '../../../declarations';
import {child, get} from 'firebase/database';
import {dbRef} from '../../config';

interface NewsItem {
  title: string;
  date: string;
  image: string;
  id: number;
}

interface CategoryItem {
  id: number;
  category: string;
  picture: string;
}

const Doctor = ({navigation}: NavigationPropsStack) => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [categoryDoctor, setCategoryDoctor] = useState<CategoryItem[]>([]);

  useEffect(() => {
    get(child(dbRef, `news/`))
      .then(snapshot => {
        if (snapshot.exists()) {
          setNews(snapshot.val());
        }
      })
      .catch(err => {
        showError(err.message);
      });

    get(child(dbRef, `category_doctor/`))
      .then(snapshot => {
        if (snapshot.exists()) {
          setCategoryDoctor(snapshot.val());
        }
      })
      .catch(err => {
        showError(err.message);
      });
  }, []);

  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.wrapperSection}>
            <Gap size={30} />
            <HomeProfile onPress={() => navigation.replace('UserProfile')} />
            <Text style={styles.welcome}>
              Mau konsultasi dengan siapa hari ini?
            </Text>
          </View>
          <View style={styles.wrapperScroll}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.category}>
                <Gap size={32} direction="horizontal" />
                {categoryDoctor.map(category => (
                  <DoctorCategory
                    key={category.id}
                    category={category.category}
                    picture={category.picture}
                    onPress={() => navigation.navigate('ChooseDoctor')}
                  />
                ))}

                <Gap size={22} direction="horizontal" />
              </View>
            </ScrollView>
          </View>
          <View style={styles.wrapperSection}>
            <Text style={styles.sectionLabel}>Top rated Doctors</Text>
            {dataDoctor.map(doctor => (
              <RatedDoctor
                key={doctor.id}
                category={doctor.category}
                name={doctor.name}
                picture={doctor.picture}
                onPress={() => navigation.navigate('DoctorProfile')}
              />
            ))}

            <Text style={styles.sectionLabel}>Good News</Text>
          </View>
          {news.map(item => (
            <NewsItem
              key={item.id}
              title={item.title}
              date={item.date}
              image={item.image}
            />
          ))}
          <Gap size={30} />
        </ScrollView>
      </View>
    </View>
  );
};

export default Doctor;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  content: {
    backgroundColor: 'white',
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  wrapperSection: {paddingHorizontal: 16},
  welcome: {
    fontSize: 20,
    fontFamily: fonts.primary[700],
    color: colors.text.primary,
    maxWidth: 209,
    marginTop: 30,
    marginBottom: 20,
  },
  category: {
    flexDirection: 'row',
  },
  wrapperScroll: {marginHorizontal: -16},
  sectionLabel: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
  },
});
