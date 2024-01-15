import { View, Text, ActivityIndicator } from 'react-native'
import { AuthProvider } from '../../context/AuthContext';
import { useAuth } from '../../context/AuthContext'
import { Stack } from 'expo-router'
import { Tabs } from 'expo-router/tabs'
import React from 'react'

import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { checkIfUserIsMentor } from '@Services/MentorServices';
import { auth } from '../../utils/firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';

export default function appLayout() {
  const [isMentor, setIsMentor] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const [hrefValue, setHrefValue] = React.useState(null);
  React.useEffect(() => {
    const getUserWithMentorRole = onAuthStateChanged(auth, async (userCredential) => {
      const value = await checkIfUserIsMentor(userCredential.uid);
      if(value) setHrefValue('/main/mentorDashboard');
      setIsLoading(false);
    });

    return getUserWithMentorRole;
  }, [])

  if (isLoading) return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><ActivityIndicator /></View>

  return (

    <AuthProvider>
      <Tabs initialRouteName='Home' screenOptions={{ tabBarShowLabel: false, headerShown: false }}>
        <Tabs.Screen name="Home"
          options={{
            tabBarIcon: ({ focused, color, size }) => {
              if (focused) return <MaterialCommunityIcons name="home" size={26} color='black' />
              else return <MaterialCommunityIcons name="home-outline" size={26} color="black" />
            }

          }} />
        <Tabs.Screen name="Mentor" options={{
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) return (<Ionicons name="people" size={24} color='black' />)
            else return <Ionicons name="people-outline" size={24} color="black" />
          }

        }} />
        <Tabs.Screen name="Chats" options={{
          tabBarIcon: ({ focused, color, size }) => (<Ionicons name={focused ? 'chatbubble-ellipses' : 'chatbubble-ellipses-outline'} size={24} color="black" />)

        }} />
        <Tabs.Screen name="mentorDashboard" options={{
          href: hrefValue,
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) return <MaterialCommunityIcons name="view-dashboard-edit" size={24} color="black" />
            else return <MaterialCommunityIcons name="view-dashboard-edit-outline" size={24} color="black" />
          },

        }}
        />
        <Tabs.Screen name="Profile" options={{
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) return <FontAwesome name="user-circle" size={24} color='black' />
            else return <FontAwesome name="user-o" size={24} color="black" />
          }


        }} />
      </Tabs>
    </AuthProvider>
  )
}