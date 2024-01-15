import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { AuthProvider } from '../../context/AuthContext'

export default function bookingLayout() {
  return (
    <AuthProvider>
      <Stack screenOptions={{ headerTransparent: false }}>
        <Stack.Screen name="Booking" />
        <Stack.Screen name="package" />
        <Stack.Screen name="[id]" />

      </Stack>

    </AuthProvider>
  )
}