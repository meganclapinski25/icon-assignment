import * as React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import breedData from './cat-and-dog-breeds.json';

const catBreeds = Object.entries(breedData.cat_breeds || {})
  .map(([name, traits]) => ({
    name,
    traits,
  }));

const dogBreeds = Object.entries(breedData.dog_breeds || {})
  .map(([name, traits]) => ({
    name,
    traits,
  }));

function CatScreen() {
  return (
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
  );
}

function DogScreen() {
  return (
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
  );
}

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 32, fontWeight: 'bold', color: '#667eea' }}>
        Welcome Back!
      </Text>
      <Text style={{ fontSize: 16, color: '#666', marginBottom: 20 }}>
        Ready to explore amazing features 
      </Text>
    </View>
  );
}





const Tab = createBottomTabNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            const icons = {
              Home: focused ? 'home' : 'home-outline',
              Cats: focused ? 'heart' : 'heart-outline',
              Dogs: focused ? 'paw' : 'paw-outline',
              Settings: focused ? 'settings' : 'settings-outline',
              Notifications: focused ? 'notifications' : 'notifications-outline',
              Profile: focused ? 'person' : 'person-outline',
            };

            return (
              <Ionicons
                name={icons[route.name] ?? 'help-circle-outline'}
                size={size}
                color={color}
              />
            );
          },
          tabBarActiveTintColor: '#667eea',
          tabBarInactiveTintColor: '#999',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Cats" component={CatScreen} />
        <Tab.Screen name="Dogs" component={DogScreen} />
        
        
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}