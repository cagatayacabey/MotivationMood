import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Screens } from '@/navigation/routePaths';

export default function MainScreen({ navigation }) {
  const handleGoAccountScreen = () => {
    navigation.navigate(Screens.AccountScreen);
  };
  const handleGoThemesScreen = () => {
    navigation.navigate(Screens.ThemesScreen);
  };
  return (
    <View>
      <Pressable onPress={handleGoAccountScreen}>
        <Text>Account</Text>
      </Pressable>
      <Pressable onPress={handleGoThemesScreen}>
        <Text>Themes</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({});
