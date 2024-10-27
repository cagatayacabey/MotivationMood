import { Image, Pressable, StyleSheet, Text } from 'react-native';
import React from 'react';
import { adjustFont, adjustHeight, adjustWidth } from '@/utils/design';
import Colors from '@/constants/colors';
import Images from '@/constants/images';

export default function ListItem({ title, image }) {
  return (
    <Pressable style={styles.container}>
      <Image style={styles.image} source={Images[image]} />
      <Text style={styles.categoryTitle}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.gray,
    width: adjustWidth(160),
    height: adjustHeight(120),
    borderRadius: adjustWidth(8),
  },
  image: {
    width: adjustWidth(160),
    height: adjustHeight(92),
    borderTopLeftRadius: adjustWidth(8),
    borderTopRightRadius: adjustWidth(8),
  },
  categoryTitle: {
    fontSize: adjustFont(16),
    lineHeight: adjustHeight(20),
    marginTop: adjustHeight(4),
    color: Colors.white,
    textAlign: 'center',
    fontFamily: 'Palatino-Bold',
  },
});
