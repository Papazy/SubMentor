import { View, Text } from 'react-native'
import React from 'react'
import {Stack} from 'expo-router'

export default function bookingLayout() {
  return (
    <Stack screenOptions={{headerTransparent:false}}>
      <Stack.Screen name="Booking" />
      <Stack.Screen name="package" />
      <Stack.Screen name="[id]" />

    </Stack>
  )
}