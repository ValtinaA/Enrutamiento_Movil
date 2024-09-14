import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
//Screens
import Heroes from './src/screens/Heroes';
import Stack from './src/screens/Stack';
import Villanos from './src/screens/Villanos';
const Tab = createBottomTabNavigator();
const HeroesStack = createNativeStackNavigator();
const VillanosStack = createNativeStackNavigator();

function HeroesStackScreen() {
  return (
    <HeroesStack.Navigator initialRouteName='Heroes'>
      <HeroesStack.Screen name='Heroes' component={Heroes} />
      <HeroesStack.Screen name='Stack' component={Stack} />
    </HeroesStack.Navigator>
  );
}
function VillanosStackScreen() {
  return (
    <VillanosStack.Navigator initialRouteName='Villanos'>
      <VillanosStack.Screen name='Villanos' component={Villanos} />
      <VillanosStack.Screen name='Stack' component={Stack} />
    </VillanosStack.Navigator>
  );
}

function RoutingTabs() {
  return (
    <Tab.Navigator
      initialRouteName='Heroes' //que pagina se ve cuando carga
      screenOptions={{ tabBarActiveTintColor: 'purple', tabBarInactiveTintColor: 'red' }} //color de los simbolos
    >
      <Tab.Screen
        name='Heroes'
        component={HeroesStackScreen}
        options={{
          headerShown: false, //ocultar navbar
          tabBarLabel: 'HEROES', //titulo simbolo
          tabBarIcon: ({ color, size }) => <Entypo name='mask' size={24} color='black' />, //icono simbolo
        }}
      />
      <Tab.Screen
        name='Villanos'
        component={VillanosStackScreen}
        options={{
          headerShown: false, //ocultar navbar
          tabBarLabel: 'VILLANOS', //titulo simbolo
          tabBarIcon: ({ color, size }) => <FontAwesome6 name='masks-theater' size={24} color='black' />, //icono simbolo
        }}
      />
    </Tab.Navigator>
  );
}

export default function navigation() {
  return (
    <NavigationContainer>
      <RoutingTabs />
    </NavigationContainer>
  );
}
