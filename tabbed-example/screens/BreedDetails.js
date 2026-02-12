import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import breedData from '../cat-and-dog-breeds.json';



function BreedDeatils(){
    const {name } = route.params
    const traits = breedData.cat_breeds[name] || breedData.dog_breeds[name];

    return (
        <ScrollView style={{ padding: 20 }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 15 }}>{name}</Text>
          {Object.entries(traits).map(([trait, value]) => (
            <Text key={trait} style={{ fontSize: 16, paddingVertical: 5 }}>
              {trait}: {value}
            </Text>
          ))}
        </ScrollView>
      );
}