import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { adjustFont, responsiveSize } from '@/utils/design';
import ListItem from '@/components/AccountScreen/ListItem';
import Seperator from '@/components/Base/Seperator';
import IconMetarial from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import TopNavigationBar from '@/components/Base/TopNavigationBar';

export default function AccountScreen() {
  const safeAreaInsets = useSafeAreaInsets();
  const navigation = useNavigation();

  const handleFavoritesButton = () => {
    navigation.navigate('FavoritesScreen');
  };

  const handleNotificationsButton = () => {
    navigation.navigate('NotificationsScreen');
  };

  const handleSettingsButton = () => {
    navigation.navigate('SettingsScreen');
  };

  const handleRateButton = () => {
    console.log('rated');
  };

  return (
    <View style={[styles.container, { paddingTop: safeAreaInsets.top }]}>
      <TopNavigationBar title="Motivation Mood" />

      <View style={styles.premiumInformationContainer}>
        <View style={styles.premiumInformationTextsContainer}>
          <Text style={styles.premiumInflormationTitle}>Premium Hesap İle Tam Erişim</Text>
          <Text style={styles.premiumInflormationSubtitle}>
            Tüm temalar, kategoriler ve daha fazlası için hemen premium ol!
          </Text>
        </View>
        <IconMetarial name="workspace-premium" size={60} />
      </View>
      <ListItem header="Favoriler" icon="heart-outline" onPress={handleFavoritesButton} />
      <ListItem
        header="Bildirimler"
        icon="notifications-outline"
        onPress={handleNotificationsButton}
      />
      <ListItem header="Diller" icon="language" />
      <Seperator marginHorizontal={20} marginBottom={20} marginTop={20} />

      <ListItem header="Ayarlar" icon="settings-outline" onPress={handleSettingsButton} />
      <ListItem header="Bizi Puanla" icon="star-outline" onPress={handleRateButton} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: responsiveSize(8),
  },
  tabBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: responsiveSize(20),
    marginBottom: responsiveSize(16),
  },
  welcomeTitle: {
    fontSize: adjustFont(24),
    fontFamily: 'Palatino-Bold',
    alignSelf: 'center',
  },
  premiumInformationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: responsiveSize(32),
    paddingHorizontal: responsiveSize(16),
    marginHorizontal: responsiveSize(20),
    marginBottom: responsiveSize(32),
    borderRadius: responsiveSize(8),
    backgroundColor: '#CABFAB',
  },
  premiumInformationTextsContainer: { width: responsiveSize(232) },
  premiumInflormationTitle: {
    fontFamily: 'Palatino-Bold',
    fontSize: adjustFont(16),
    marginBottom: responsiveSize(8),
  },
  premiumInflormationSubtitle: {
    fontFamily: 'Palatino',
    fontSize: adjustFont(16),
  },
});
