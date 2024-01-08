import { View, Text } from 'react-native'
import {Stack, Slot} from 'expo-router'
import React from 'react'

export default function _layout() {


  return (
    <Stack screenOptions={{headerShown: false}}/>
  )
}