import { StyleSheet, View } from 'react-native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import TopNavigationBar from '@/components/Base/TopNavigationBar';
import { FlashList } from '@shopify/flash-list';
import ListItem from '@/components/FavoritesScreen/ListItem';
import { responsiveSize } from '@/utils/design';

const motivationQuotes = [
  {
    id: 1,
    quote: 'Başarı, her gün küçük adımlar atarak büyük hedeflere ulaşmaktır.',
    author: 'Tony Robbins',
  },
  {
    id: 2,
    quote: 'Zorluklar, seni daha güçlü yapan fırsatlardır. Asla pes etme!',
    author: 'Nelson Mandela',
  },
  {
    id: 3,
    quote: 'Hayallerinizin peşinden koşmak için asla geç değildir. Bugün başlayın!',
    author: 'Walt Disney',
  },
  {
    id: 4,
    quote: 'Her başarısızlık, başarıya giden yolda bir adımdır. Korkma, dene!',
    author: 'Thomas Edison',
  },
  {
    id: 5,
    quote: 'İnanç, başarının temelidir. Kendine inan ve imkansızı başar.',
    author: 'Oprah Winfrey',
  },
  {
    id: 6,
    quote: "Bugün yaptığın seçimler, yarının sen'ini belirler. Akıllıca seç!",
    author: 'Steve Jobs',
  },
  {
    id: 7,
    quote:
      'Başarı bir yolculuktur, bir varış noktası değil. Her anın tadını çıkar ve ilerlemeye devam et.Başarı bir yolculuktur, bir varış noktası değil. Her anın tadını çıkar ve ilerlemeye devam et.',
    author: 'Ralph Waldo Emerson',
  },
  {
    id: 8,
    quote: 'Tutkuyla çalış, sabırla bekle. Başarı, bu ikisinin mükemmel birleşimidir.',
    author: 'Maya Angelou',
  },
  {
    id: 9,
    quote:
      'Sınırlarını zorla, konfor alanından çık. Gerçek potansiyelini ancak o zaman keşfedebilirsin.',
    author: 'Eleanor Roosevelt',
  },
  {
    id: 10,
    quote: 'Her yeni gün, hayatını değiştirmek için yeni bir fırsattır. Bu fırsatı kaçırma!',
    author: 'Stephen Hawking',
  },
];

export default function FavoritesScreen() {
  const safeAreaInsets = useSafeAreaInsets();

  const renderItem = ({ item, index }) => <ListItem item={item} index={index} />;
  const listFooterComponent = () => <View style={{ width: '100%', height: responsiveSize(24) }} />;

  return (
    <View style={[styles.container, { paddingTop: safeAreaInsets.top }]}>
      <TopNavigationBar title="Favorites" />
      <FlashList
        data={motivationQuotes}
        estimatedItemSize={80}
        renderItem={renderItem}
        ListFooterComponent={listFooterComponent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
