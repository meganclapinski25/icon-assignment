import React from 'react';
import{View, Text, ScrollView} from 'react-native';
import breedData from '../cat-and-dog-breeds.json';

const catBreeds = Object.entries(breedData.cats).map(([name,traits]) =>{
    name,
    traits
})

function CatScreen() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          {catBreeds.map((breed) => {
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