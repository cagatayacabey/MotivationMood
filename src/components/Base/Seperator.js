import { StyleSheet, View } from 'react-native';
import React from 'react';
import { responsiveSize } from '@/utils/design';

export default function Seperator({ marginHorizontal, marginBottom, marginTop }) {
  return (
    <View
      style={[
        styles.container,
        {
          marginHorizontal: marginHorizontal ? responsiveSize(marginHorizontal) : 0,
          marginBottom: marginBottom ? responsiveSize(marginBottom) : 0,
          marginTop: marginTop ? responsiveSize(marginTop) : 0,
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    height: 1,
    backgroundColor: 'lightgray',
  },
});
