import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Screens } from '@/navigation/routePaths';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon5 from 'react-native-vector-icons/FontAwesome5';
import IconMetarial from 'react-native-vector-icons/MaterialIcons';
import IconFoundation from 'react-native-vector-icons/Foundation';
import IconIonicon from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Images from '@/constants/images';
import Colors from '@/constants/colors';
import { adjustFont, responsiveSize } from '@/utils/design';

export default function MainScreen({ navigation }) {
  const safeAreaInsets = useSafeAreaInsets();

  const handleGoAccountScreen = () => {
    navigation.navigate(Screens.AccountScreen);
  };
  const handleGoThemesScreen = () => {
    navigation.navigate(Screens.ThemesScreen);
  };
  return (
    <View style={styles.container}>
      <ImageBackground source={Images.BLACK} resizeMode="cover" style={styles.image}>
        <View style={[styles.topContainer, { paddingTop: safeAreaInsets.top }]}>
          <Pressable style={styles.crownIcon}>
            <IconFoundation name="crown" size={30} color={Colors.white} />
          </Pressable>
        </View>

        <View style={styles.midContainer}>
          <Text style={styles.sentenceText}>SEN AKLINA KOYDUĞUN HER ŞEYİ YAPABİLİRSİN</Text>
          <Text style={styles.authorText}>- Çağatay AÇABEY</Text>
          <View
            style={[
              styles.shareAndFavoriteButton,
              { bottom: safeAreaInsets.bottom, right: safeAreaInsets.right },
            ]}
          >
            <Pressable style={styles.shareIcon}>
              <IconIonicon name="share-outline" size={30} color={Colors.white} />
            </Pressable>
            <Pressable style={styles.favoriteIcon}>
              <IconIonicon
                name="heart-outline"
                size={30}
                color={Colors.white}
                marginVertical={responsiveSize(25)}
              />
            </Pressable>
          </View>
        </View>

        <View style={[styles.bottomContainer, { paddingBottom: safeAreaInsets.bottom }]}>
          <View style={styles.bottomLeftContainer}>
            <Pressable onPress={handleGoAccountScreen} style={styles.categoryIcon}>
              <IconMetarial name="category" size={25} color={Colors.white} />
              <Text style={styles.categoryText}>Categories</Text>
            </Pressable>
            <Text />
          </View>

          <View style={styles.bottomRightContainer}>
            <Pressable onPress={handleGoThemesScreen} style={styles.paletteIcon}>
              <Icon5 name="palette" size={25} color={Colors.white} />
            </Pressable>
            <Pressable onPress={handleGoAccountScreen} style={styles.userIcon}>
              <Icon name="user" size={25} color={Colors.white} />
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },

  topContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    // paddingVertical: responsiveSize(30),
    paddingHorizontal: responsiveSize(20),
  },
  crownIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.transparentGray,
    // paddingHorizontal: responsiveSize(10),
    // paddingVertical: responsiveSize(5),
    width: responsiveSize(56),
    height: responsiveSize(41),
    borderRadius: responsiveSize(8),
  },
  midContainer: {
    flex: 1,
    padding: responsiveSize(30),
    justifyContent: 'center',
  },
  sentenceText: {
    textAlign: 'center',
    fontSize: adjustFont(23),
    lineHeight: adjustFont(33),
    color: Colors.white,
  },
  authorText: {
    textAlign: 'center',
    fontSize: adjustFont(16),
    lineHeight: adjustFont(18),
    marginTop: responsiveSize(16),
    color: Colors.white,
  },
  shareAndFavoriteButton: {
    position: 'absolute',
    marginEnd: responsiveSize(25),
  },
  shareIcon: {},
  favoriteIcon: {},
  bottomContainer: {
    flexDirection: 'row',
    // paddingVertical: responsiveSize(30),
  },
  bottomRightContainer: {
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  userIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    // paddingHorizontal: responsiveSize(11),
    // paddingVertical: responsiveSize(5),
    backgroundColor: Colors.transparentGray,
    width: responsiveSize(56),
    height: responsiveSize(41),
    borderRadius: responsiveSize(8),
  },
  paletteIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.transparentGray,
    // paddingHorizontal: responsiveSize(11),
    // paddingVertical: responsiveSize(5),
    width: responsiveSize(56),
    height: responsiveSize(41),
    borderRadius: responsiveSize(8),
  },
  bottomLeftContainer: {
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  categoryIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.transparentGray,
    paddingHorizontal: responsiveSize(12),
    // paddingVertical: responsiveSize(5),
    // width: responsiveSize(56),
    height: responsiveSize(41),
    borderRadius: responsiveSize(8),
  },
  categoryText: {
    color: Colors.white,
    marginLeft: responsiveSize(4),
  },
});
