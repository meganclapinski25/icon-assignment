import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import CatScreen from './screens/CatScreen';
import DogScreen from './screens/DogScreen';
import BreedDetails from './screens/BreedDetails';


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
const Stack = createNativeStackNavigator();

function TabNav(){
  return(
    <Tab.Navigator
      screenOptions={({route}) =>({
        tabBarIcon:({focused,color,size}) =>{
          const icons = {
            Home: focused ? 'home' : 'home-outline',
            Cats: focused ? 'heart' : 'heart-outline',
            Dogs: focused ? 'paw' : 'paw-outline',
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
      
      <Tab.Screen name="Cats" component={CatScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Dogs" component={DogScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Tabs"
          component={TabNav}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BreedDetails"
          component={BreedDetails}
          options={({ route }) => ({
            title: route.params.name,
            headerTintColor: '#667eea',
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}