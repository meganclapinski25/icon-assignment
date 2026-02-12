import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import breedData from '../cat-and-dog-breeds.json';

const dogBreeds = Object.entries(breedData.dog_breeds || {}).map(([name, traits]) => ({
  name,
  traits,
}));

function DogScreen() {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        {dogBreeds.map((breed) => {
          const traits = Object.entries(breed.traits || {});
          return (
            <View key={breed.name}>
              <Text>{breed.name}</Text>
              {traits.map(([trait, value]) => (
                <View key={trait}>
                  <Text>{trait}: {value}</Text>
                </View>
              ))}
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

export default DogScreen;
