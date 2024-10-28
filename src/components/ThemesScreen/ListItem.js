import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { adjustFont, adjustHeight, adjustWidth } from '@/utils/design';
import Colors from '@/constants/colors';
import Images from '@/constants/images';

export default function ListItem({ image }) {
  return (
    <Pressable style={styles.container}>
      <ImageBackground
        imageStyle={{ borderRadius: adjustWidth(8) }}
        source={Images[image]}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.quoteContainer}>
          <Text style={styles.quote}>Quote</Text>
        </View>
      </ImageBackground>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: adjustWidth(108),
    height: adjustHeight(160),
  },
  quoteContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quote: {
    fontSize: adjustFont(16),
    lineHeight: adjustHeight(20),
    marginTop: adjustHeight(4),
    color: Colors.white,
    fontFamily: 'Palatino-Bold',
  },
});
