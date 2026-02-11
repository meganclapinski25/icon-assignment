import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import breedData from './cat-and-dog-breeds.json'

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

function SettingsScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: '#f5f5f5', paddingTop: 60, alignItems: 'center' }}>
      <Text style={{ fontSize: 22, fontWeight: '600', color: '#333', marginBottom: 5 }}>
        Megan Clapinski
      </Text>
      <Text style={{ fontSize: 14, color: '#999', marginBottom: 30 }}>
        Data Analyst
      </Text>
      <View style={{ width: '90%', backgroundColor: 'white', borderRadius: 12, padding: 15 }}>
        <Text style={{ fontSize: 16, fontWeight: '600', color: '#333', textAlign: 'center' }}>
          Account Settings
        </Text>
      </View>
    </View>
  );
}

function NotificationsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{ fontSize: 48, marginBottom: 10 }}>🔔</Text>
      <Text style={{ fontSize: 24, fontWeight: '600', color: '#333' }}>
        Notifications
      </Text>
      <Text style={{ fontSize: 14, color: '#666', marginTop: 8 }}></Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{ fontSize: 48, marginBottom: 10 }}>Megan Clapinski</Text>
      <Text style={{ fontSize: 24, fontWeight: '600', color: '#333' }}>
        Profile
      </Text>
      <View style={{ width: '90%', backgroundColor: 'white', borderRadius: 12, padding: 15, marginTop: 20 }}>
        <Text style={{ fontSize: 16, fontWeight: '600', color: '#333', textAlign: 'center' }}>
          Username
        </Text>
        <Text style={{ fontSize: 16, fontWeight: '300', color: '#333', textAlign: 'center' }}>
          meganclapinski
        </Text>
      </View>
      <View style={{ width: '90%', backgroundColor: 'white', borderRadius: 12, padding: 15 ,marginTop: 20 }}>
        <Text style={{ fontSize: 16, fontWeight: '600', color: '#333', textAlign: 'center' }}>
          Blocked 
        </Text>
        <Text style={{ fontSize: 16, fontWeight: '600', color: '#333', textAlign: 'center' }}>
          Ads
        </Text>
        <Text style={{ fontSize: 16, fontWeight: '600', color: '#333', textAlign: 'center' }}>
          Saved
        </Text>
        <Text style={{ fontSize: 16, fontWeight: '600', color: '#333', textAlign: 'center' }}>
          Activity
        </Text>
      </View>
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
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Notifications" component={NotificationsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}