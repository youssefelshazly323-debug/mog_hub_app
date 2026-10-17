import { Image } from 'expo-image';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { MogPageHeader } from '@/components/mog-page-header';

const bookingSteps = [
  {
    image: require('../../assets/images/booking-1.jpg'),
    title: 'Complete and Submit Membership Form',
    description: 'Go to the Membership page and complete and submit the membership form.',
  },
  {
    image: require('../../assets/images/booking-2.jpg'),
    title: 'Choose your Mog and Date',
    description: 'Choose your Mog from the list of available Mogs emailed to you. Note the Mog’s number.',
  },
  {
    image: require('../../assets/images/booking-3.jpg'),
    title: 'Collect your Mog',
    description: 'Make suitable arrangements to collect your Mog from the Mog Hub depot.',
  },
];

export default function BookingScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.content}>
        <MogPageHeader title="Bookings" />
        {bookingSteps.map((step, index) => (
          <View key={step.title} style={styles.step}>
            <Image source={step.image} style={styles.image} contentFit="cover" />
            <Text style={styles.stepNumber}>Step {index + 1}</Text>
            <Text style={styles.stepTitle}>{step.title}</Text>
            <Text style={styles.description}>{step.description}</Text>
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
  step: {
    marginHorizontal: 20,
    marginTop: 22,
    paddingBottom: 22,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e0d8',
  },
  image: {
    width: '100%',
    height: 210,
    borderRadius: 12,
  },
  stepNumber: {
    marginTop: 14,
    color: '#c96b16',
    fontSize: 13,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  stepTitle: {
    marginTop: 5,
    color: '#28543b',
    fontSize: 20,
    fontWeight: '700',
  },
  description: {
    marginTop: 8,
    color: '#3f3f3f',
    fontSize: 16,
    lineHeight: 24,
  },
});
