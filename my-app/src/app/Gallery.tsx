import { Image } from 'expo-image';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { MogPageHeader } from '@/components/mog-page-header';

const galleryPets = [
  { name: 'Bubbles', image: require('../../assets/images/gallery-1.jpg') },
  { name: 'Blossom', image: require('../../assets/images/gallery-2.jpg') },
  { name: 'Buttercup', image: require('../../assets/images/gallery-3.jpg') },
  { name: 'Mittens', image: require('../../assets/images/gallery-4.jpg') },
  { name: 'Mochi', image: require('../../assets/images/gallery-5.jpg') },
  { name: 'Poppy', image: require('../../assets/images/gallery-6.jpg') },
  { name: 'Clover', image: require('../../assets/images/gallery-7.jpg') },
  { name: 'Biscuit', image: require('../../assets/images/gallery-8.jpg') },
];

export default function GalleryScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.content}>
        <MogPageHeader title="Gallery" />
        {galleryPets.map((pet) => (
          <View key={pet.name} style={styles.petCard}>
            <Image source={pet.image} style={styles.image} contentFit="cover" />
            <Text style={styles.petName}>{pet.name}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    paddingBottom: 28,
  },
  petCard: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  image: {
    width: '100%',
    height: 240,
    borderRadius: 12,
    backgroundColor: '#f7f3ed',
  },
  petName: {
    marginTop: 8,
    color: '#28543b',
    fontSize: 19,
    fontWeight: '700',
    textAlign: 'center',
  },
});
