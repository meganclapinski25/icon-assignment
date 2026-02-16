import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import breedData from '../cat-and-dog-breeds.json';



function BreedDeatils({route}){
    const {name } = route.params
    const traits = breedData.cat_breeds[name] || breedData.dog_breeds[name];

    return (
        <ScrollView style={ styles.container }>
          <Text style={ styles.breedName}>{name}</Text>
          {Object.entries(traits).map(([trait, value]) => (
            <View key={trait} style={styles.traitRow}>
              <Text style={styles.traitName}>{trait}</Text>
              <Text style={styles.traitValue}>{'★'.repeat(value)}{'☆'.repeat(5 - value)}</Text>

            </View>
          ))}
        </ScrollView>
      );
}
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  breedName: { fontSize: 28, fontWeight: 'bold', color: '#667eea', marginBottom: 20 },
  traitRow: {
    flexDirection: 'row', justifyContent: 'space-between',
    paddingVertical: 12, paddingHorizontal: 10,
    borderBottomWidth: 1, borderBottomColor: '#eee',
  },
  traitName: { fontSize: 16, color: '#333' },
  traitValue: { fontSize: 16, fontWeight: 'bold', color: '#667eea' },
});

export default BreedDeatils;