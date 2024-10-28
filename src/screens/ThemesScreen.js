import { ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';
import ListItem from '@/components/ThemesScreen/ListItem';
import { adjustWidth } from '@/utils/design';
import TopNavigationBar from '@/components/Base/TopNavigationBar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const themes = [
  {
    id: 1,
    image: 'BLACK',
  },
  {
    id: 2,
    image: 'BLACK_GRADIENT',
  },
  {
    id: 3,
    image: 'PINK',
  },
  {
    id: 4,
    image: 'FOREST',
  },
  {
    id: 5,
    image: 'AUTUMN_WAY',
  },
  {
    id: 6,
    image: 'RAINLY_WINDOW',
  },
  {
    id: 7,
    image: 'BLACK',
  },
  {
    id: 8,
    image: 'RAINLY_WINDOW',
  },
  {
    id: 10,
    image: 'AUTUMN_WAY',
  },
  {
    id: 11,
    image: 'BLACK_GRADIENT',
  },
  {
    id: 12,
    image: 'FOREST',
  },
  {
    id: 13,
    image: 'BLACK_GRADIENT',
  },
];

export default function ThemesScreen() {
  const safeAreaInsets = useSafeAreaInsets();

  const rows = [];
  for (let i = 0; i < themes.length; i += 3) {
    rows.push(themes.slice(i, i + 3));
  }

  return (
    <View style={[styles.container, { paddingTop: safeAreaInsets.top }]}>
      <TopNavigationBar title="Themes" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        <View style={styles.innerContainer}>
          {rows.map((row, rowIndex) => (
            <View key={rowIndex} style={styles.row}>
              {row.map((theme) => (
                <ListItem key={theme.id} title={theme.title} image={theme.image} />
              ))}
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  innerContainer: {
    marginHorizontal: adjustWidth(20),
    paddingVertical: adjustWidth(16),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: adjustWidth(16),
  },
});
