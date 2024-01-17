import React from 'react'
import { Stack } from 'expo-router'

export default function _layout() {
  return (
    <Stack initialRouteName="index" screenOptions={{ headerTransparent: false }}>
      <Stack.Screen name="index" options={{headerShown:false}} />
      <Stack.Screen name="[id]" options={{headerTitle:""}}  />
    </Stack>
  )
}