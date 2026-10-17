import { useState } from 'react';
import {
  Button,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { MogPageHeader } from '@/components/mog-page-header';

const interests = ['Sports', 'Movies', 'Books', 'Travel', 'Fitness', 'Arts'];

type MemberDetails = {
  name: string;
  surname: string;
  email: string;
};

type FormErrors = Partial<Record<keyof MemberDetails, string>>;

export default function MembershipScreen() {
  const [details, setDetails] = useState<MemberDetails>({
    name: '',
    surname: '',
    email: '',
  });
  const [interest, setInterest] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const updateName = (field: 'name' | 'surname', value: string) => {
    setDetails((current) => ({
      ...current,
      [field]: value.replace(/[0-9]/g, '').slice(0, 15),
    }));
    setSubmitted(false);
  };

  const submitForm = () => {
    const nextErrors: FormErrors = {};
    const name = details.name.trim();
    const surname = details.surname.trim();
    const email = details.email.trim();
    const validEmail = /^[^\s@]{3,}@[^\s@.]{3,}(?:\.[^\s@.]+)+$/.test(email);

    if (!name) {
      nextErrors.name = 'Name is required.';
    } else if (name.length > 15 || name.replace(/[^A-Za-z]/g, '').length < 3) {
      nextErrors.name = 'Enter 3 to 15 letters for your name.';
    }

    if (!surname) {
      nextErrors.surname = 'Surname is required.';
    } else if (surname.length > 15 || surname.replace(/[^A-Za-z]/g, '').length < 3) {
      nextErrors.surname = 'Enter 3 to 15 letters for your surname.';
    }

    if (!email) {
      nextErrors.email = 'Email is required.';
    } else if (!validEmail) {
      nextErrors.email =
        'Enter a valid email with at least 3 characters before @ and 3 between @ and .';
    }

    setErrors(nextErrors);
    setSubmitted(Object.keys(nextErrors).length === 0);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
        <MogPageHeader title="Membership" />
        <View style={styles.form}>
          <Text style={styles.intro}>Join Mog Hub and tell us a little about yourself.</Text>

          <Text style={styles.label}>Name *</Text>
          <TextInput
            accessibilityLabel="Name"
            autoCapitalize="words"
            maxLength={15}
            onChangeText={(value) => updateName('name', value)}
            placeholder="Your name"
            style={styles.input}
            value={details.name}
          />
          {errors.name && <Text style={styles.error}>{errors.name}</Text>}

          <Text style={styles.label}>Surname *</Text>
          <TextInput
            accessibilityLabel="Surname"
            autoCapitalize="words"
            maxLength={15}
            onChangeText={(value) => updateName('surname', value)}
            placeholder="Your surname"
            style={styles.input}
            value={details.surname}
          />
          {errors.surname && <Text style={styles.error}>{errors.surname}</Text>}

          <Text style={styles.label}>Email *</Text>
          <TextInput
            accessibilityLabel="Email"
            autoCapitalize="none"
            autoComplete="email"
            keyboardType="email-address"
            onChangeText={(email) => {
              setDetails((current) => ({ ...current, email }));
              setSubmitted(false);
            }}
            placeholder="you@example.com"
            style={styles.input}
            value={details.email}
          />
          {errors.email && <Text style={styles.error}>{errors.email}</Text>}

          <Text style={styles.label}>Interests</Text>
          <View style={styles.interests}>
            {interests.map((item) => {
              const selected = interest === item;
              return (
                <Pressable
                  key={item}
                  accessibilityRole="radio"
                  accessibilityState={{ checked: selected }}
                  onPress={() => setInterest(item)}
                  style={styles.interestOption}
                >
                  <View style={[styles.radio, selected && styles.radioSelected]}>
                    {selected && <View style={styles.radioDot} />}
                  </View>
                  <Text style={styles.interestText}>{item}</Text>
                </Pressable>
              );
            })}
          </View>

          <View style={styles.submitButton}>
            <Button color="#28543b" onPress={submitForm} title="Submit" />
          </View>
          {submitted && (
            <Text accessibilityRole="alert" style={styles.success}>
              Your membership form has been submitted.
            </Text>
          )}
        </View>
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
    paddingBottom: 32,
  },
  form: {
    marginHorizontal: 20,
    marginTop: 20,
    padding: 18,
    borderRadius: 12,
    backgroundColor: '#f7f3ed',
  },
  intro: {
    marginBottom: 16,
    color: '#3f3f3f',
    fontSize: 16,
    lineHeight: 23,
  },
  label: {
    marginTop: 12,
    marginBottom: 6,
    color: '#28543b',
    fontSize: 15,
    fontWeight: '700',
  },
  input: {
    minHeight: 46,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#b9c9bd',
    borderRadius: 8,
    backgroundColor: '#fff',
    color: '#222',
    fontSize: 16,
  },
  error: {
    marginTop: 5,
    color: '#b00020',
    fontSize: 13,
  },
  interests: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 4,
  },
  interestOption: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '50%',
    paddingVertical: 8,
  },
  radio: {
    width: 20,
    height: 20,
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#28543b',
    borderRadius: 10,
  },
  radioSelected: {
    borderColor: '#f28c28',
  },
  radioDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#f28c28',
  },
  interestText: {
    color: '#333',
    fontSize: 15,
  },
  submitButton: {
    marginTop: 18,
    overflow: 'hidden',
    borderRadius: 8,
  },
  success: {
    marginTop: 14,
    color: '#28543b',
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
  },
});
