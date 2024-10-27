import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { adjustFont, responsiveSize } from '@/utils/design';
import IconMetarial from 'react-native-vector-icons/MaterialIcons';
import Colors from '@/constants/colors';
import IconIonicon from 'react-native-vector-icons/Ionicons';

export default function ListItem({ header, icon, onPress }) {
  const handleButtonPress = () => {
    onPress && onPress();
  };

  return (
    <Pressable onPress={handleButtonPress} style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.icon}>
          <IconIonicon name={icon} size={30} color={Colors.white} />
        </View>

        <Text style={styles.header}>{header}</Text>
      </View>

      <IconMetarial name="chevron-right" size={30} color={Colors.white} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#d5d8db',
    marginHorizontal: responsiveSize(20),
    marginBottom: responsiveSize(12),
    paddingVertical: responsiveSize(12),
    paddingHorizontal: responsiveSize(16),
    borderRadius: responsiveSize(8),
  },
  icon: {
    padding: responsiveSize(4),
    borderRadius: responsiveSize(8),
    marginEnd: responsiveSize(4),
    backgroundColor: '#717880',
  },
  headerContainer: {
    flexDirection: 'row',
  },
  header: {
    alignSelf: 'center',
    fontSize: adjustFont(16),
    marginStart: responsiveSize(8),
    fontFamily: 'Palatino',
  },
});
