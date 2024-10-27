import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import IconIonicon from 'react-native-vector-icons/Ionicons';
import { adjustFont, responsiveSize } from '@/utils/design';
import { useNavigation } from '@react-navigation/native';

export default function TopNavigationBar({ title }) {
  const navigation = useNavigation();

  const handleBackButton = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Pressable onPress={handleBackButton}>
        <IconIonicon name="close-outline" size={30} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: responsiveSize(20),
    marginBottom: responsiveSize(16),
  },
  title: {
    fontSize: adjustFont(24),
    fontFamily: 'Palatino-Bold',
    alignSelf: 'center',
  },
});
