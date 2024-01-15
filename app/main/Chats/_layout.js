import React from 'react'
import { Stack } from 'expo-router'

export default function _layout() {
  return (
    <Stack screenOptions={{ headerTransparent: false }}>
      <Stack.Screen name="index" options={{headerShown:false}} />
      <Stack.Screen name="[id]" />
    </Stack>
  )
}