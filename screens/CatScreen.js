import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import breedData from '../cat-and-dog-breeds.json';
import { useNavigation } from '@react-navigation/native';

const catBreeds = Object.keys(breedData.cat_breeds || {});

function CatScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView>
        {catBreeds.map((name) =>(
          <TouchableOpacity
          key = {name}
          style = {styles.breedItem}
          onPress={() => navigation.navigate('BreedDetails', {name})}
          >
            <Text style = {styles.breedName}>{name}</Text>
            <Text style = {styles.arrow}>›</Text>

          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#fff' 
  },
  breedItem: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    paddingVertical: 15,
     paddingHorizontal: 20,
    borderBottomWidth: 1, 
    borderBottomColor: '#eee',
  },
  breedName: { 
    fontSize: 18,
    color: '#333' 
  },
  arrow: { 
    fontSize: 24, 
    color: '#667eea' 
  },
});

export default CatScreen;
