import { StyleSheet, View } from 'react-native';
import React from 'react';
import TopNavigationBar from '@/components/Base/TopNavigationBar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ListItem from '@/components/CategoryScreen/ListItem';
import { adjustWidth } from '@/utils/design';

const categories = [
  {
    id: 1,
    title: 'General',
    image: 'GENERAL',
  },
  {
    id: 2,
    title: 'Sports',
    image: 'SPORTS',
  },
  {
    id: 3,
    title: 'Love',
    image: 'LOVE',
  },
  {
    id: 4,
    title: 'Self Confidence',
    image: 'SELF_CONFIDENCE',
  },
  {
    id: 5,
    title: 'Personality',
    image: 'PERSONAL_DEVELOPMENT',
  },
  {
    id: 6,
    title: 'Positive Thinking',
    image: 'POSITIVE_THINKING',
  },
  {
    id: 7,
    title: 'Motivation',
    image: 'MOTIVATION',
  },
];

export default function CategoryScreen() {
  const safeAreaInsets = useSafeAreaInsets();

  const rows = [];
  for (let i = 0; i < categories.length; i += 2) {
    rows.push(categories.slice(i, i + 2));
  }

  return (
    <View style={[styles.container, { paddingTop: safeAreaInsets.top }]}>
      <TopNavigationBar title="Categories" />
      <View style={styles.innerContainer}>
        {rows.map((row, rowIndex) => (
          // eslint-disable-next-line react/no-array-index-key
          <View key={rowIndex} style={styles.row}>
            {row.map((category) => (
              <ListItem key={category.id} title={category.title} image={category.image} />
            ))}
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 4,
    shadowOpacity: 0.4,
    elevation: 8,
  },
  innerContainer: {
    marginHorizontal: adjustWidth(20),
    marginTop: adjustWidth(16),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: adjustWidth(16),
  },
});
