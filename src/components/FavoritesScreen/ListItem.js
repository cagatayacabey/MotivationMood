import { adjustFont, responsiveSize } from '@/utils/design';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import IconIonicon from 'react-native-vector-icons/Ionicons';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import IconMetarial from 'react-native-vector-icons/MaterialIcons';

function ListItem({ item, index }) {
  return (
    <View style={styles.container}>
      <Text style={styles.quoteText}>{item.quote}</Text>
      <View style={styles.authorAndIcon}>
        <Text style={styles.authorText}>- {item.author}</Text>
        <View style={{ flexDirection: 'row' }}>
          {/* <Pressable style={styles.shareIcon}>
            <IconMetarial name="delete-forever" size={20} color="#717880" />
          </Pressable> */}
          <Pressable style={styles.shareIcon}>
            <IconIonicon name="share-outline" size={20} color="#717880" />
          </Pressable>
        </View>
      </View>
    </View>
  );
}

export default ListItem;

const styles = StyleSheet.create({
  container: {
    padding: responsiveSize(20),
    marginHorizontal: responsiveSize(20),
    marginVertical: responsiveSize(8),
    borderRadius: responsiveSize(8),
    backgroundColor: '#d5d8db',
  },
  quoteText: {
    fontSize: adjustFont(16),
    lineHeight: responsiveSize(20),
    marginBottom: responsiveSize(8),
    fontFamily: 'Palatino',
  },
  authorText: {
    fontSize: adjustFont(16),
    fontFamily: 'Palatino',
  },
  authorAndIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
