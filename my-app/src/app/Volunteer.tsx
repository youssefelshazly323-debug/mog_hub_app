import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { MogPageHeader } from '@/components/mog-page-header';

const opportunities = [
  {
    title: 'Full Time',
    description:
      'If you are retired and able to come into Mog Hub full-time, please contact us. We really need dedicated volunteers to assist.',
  },
  {
    title: 'Part Time',
    description:
      'Even if you can only come in certain days of the week for certain hours, we would be only too grateful for your generous donation of time.',
  },
  {
    title: 'Occasional',
    description: 'If you can volunteer occasionally, we can add you to our roster.',
  },
];

export default function VolunteerScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.content}>
        <MogPageHeader title="Volunteer" />
        {opportunities.map((opportunity) => (
          <View key={opportunity.title} style={styles.card}>
            <Text style={styles.cardTitle}>{opportunity.title}</Text>
            <Text style={styles.description}>{opportunity.description}</Text>
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
  card: {
    marginHorizontal: 20,
    marginTop: 20,
    padding: 18,
    borderRadius: 12,
    backgroundColor: '#f7f3ed',
    borderLeftWidth: 5,
    borderLeftColor: '#f28c28',
  },
  cardTitle: {
    color: '#28543b',
    fontSize: 21,
    fontWeight: '700',
  },
  description: {
    marginTop: 8,
    color: '#3f3f3f',
    fontSize: 16,
    lineHeight: 24,
  },
});
