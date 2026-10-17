import React, { useState } from 'react';
import {
  Button,
  Image,
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import styles from './Style';


const petOptions = [
  { value: '1', label: 'Cat' },
  { value: '2', label: 'Dog' },
  { value: '3', label: 'Other' },
];

type PetEntry = {
  name: string;
  type: string;
};

export default function MainScreen() {
  const [petName, setPetName] = useState('');
  const [pet, setPet] = useState<PetEntry[]>([]);
  const [selectedValue, setSelectedValue] = useState('1');
  const [isTypeModalVisible, setIsTypeModalVisible] = useState(false);

  const renderPets = () =>
    pet.map((petEntry, index) => (
      <View key={`${petEntry.name}-${index}`} style={styles.inputPetContainer}>
        <Text style={styles.inputPetTxt}>{`${petEntry.name} - ${petEntry.type}`}</Text>
      </View>
    ));

  const addPet = () => {
    const trimmedName = petName.trim();
    const selectedPet = petOptions.find((option) => option.value === selectedValue);

    if (!trimmedName || !selectedPet) {
      return;
    }

    setPet((currentPets) => [
      ...currentPets,
      { name: trimmedName, type: selectedPet.label },
    ]);
    setPetName('');
    setIsTypeModalVisible(false);
  };

  return (
    <View>
      <SafeAreaView>
        <ScrollView>
          <Image
            style={styles.mogHubLogo}
            source={require('../../assets/images/splash-icon.png')}
          />
          <Text style={styles.mainTxt}>Mog Hub!</Text>
          <Text style={styles.slogan}>P u r r f e c t C o m p a n i o n s</Text>

          <View style={styles.inputFlex}>
            <Text style={styles.enterTxt}>Enter your pet's name:</Text>
            <TextInput
              style={styles.UserInputTxt}
              placeholder="Mog"
              value={petName}
              onChangeText={setPetName}
            />
          </View>

          <Button
            title="Add Pet"
            onPress={() => setIsTypeModalVisible(true)}
          />

          <View style={styles.petContainer}>{renderPets()}</View>
        </ScrollView>
      </SafeAreaView>

      <Modal
        visible={isTypeModalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setIsTypeModalVisible(false)}
      >
        <View style={styles.modalBackdrop}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select your pet type</Text>
            {petOptions.map((option) => (
              <Pressable
                key={option.value}
                accessibilityRole="radio"
                accessibilityState={{ checked: selectedValue === option.value }}
                style={[
                  styles.modalOption,
                  selectedValue === option.value && styles.selectedModalOption,
                ]}
                onPress={() => setSelectedValue(option.value)}
              >
                <Text
                  style={[
                    styles.radioLabel,
                    selectedValue === option.value && styles.selectedRadioLabel,
                  ]}
                >
                  {option.label}
                </Text>
              </Pressable>
            ))}
            {!petName.trim() && (
              <Text style={styles.modalValidation}>Enter your pet's name before adding it.</Text>
            )}
            <View style={styles.modalActions}>
              <Button title="Cancel" onPress={() => setIsTypeModalVisible(false)} />
              <Button
                title="Add"
                onPress={addPet}
                disabled={!petName.trim()}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}