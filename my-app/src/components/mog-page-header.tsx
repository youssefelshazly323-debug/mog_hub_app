import { Link, usePathname } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

const pages = [
  { label: 'Home', href: '/MainScreen' },
  { label: 'Bookings', href: '/Booking' },
  { label: 'Volunteer', href: '/Volunteer' },
  { label: 'Gallery', href: '/Gallery' },
  { label: 'Membership', href: '/Membership' },
] as const;

export function MogPageHeader({ title }: { title: string }) {
  const pathname = usePathname();

  return (
    <View>
      <View style={styles.titleBar}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.navigation}
      >
        {pages.map((page) => {
          const active = pathname === page.href;
          return (
            <Link key={page.href} href={page.href} asChild>
              <Pressable
                accessibilityRole="link"
                accessibilityState={{ selected: active }}
                style={[styles.navigationItem, active && styles.activeNavigationItem]}
              >
                <Text style={[styles.navigationText, active && styles.activeNavigationText]}>
                  {page.label}
                </Text>
              </Pressable>
            </Link>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  titleBar: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#28543b',
    borderBottomColor: '#f28c28',
    borderBottomWidth: 4,
  },
  title: {
    color: '#ffffff',
    fontSize: 26,
    fontWeight: '700',
  },
  navigation: {
    minWidth: '100%',
    justifyContent: 'space-around',
    paddingHorizontal: 8,
    paddingVertical: 8,
    backgroundColor: '#f7f3ed',
  },
  navigationItem: {
    marginHorizontal: 3,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 8,
  },
  activeNavigationItem: {
    backgroundColor: '#28543b',
  },
  navigationText: {
    color: '#28543b',
    fontSize: 13,
    fontWeight: '600',
  },
  activeNavigationText: {
    color: '#ffffff',
  },
});
