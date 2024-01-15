import { View, Text } from 'react-native'
import React from 'react'
import {Stack} from 'expo-router'
import { AuthProvider } from '../../../context/AuthContext'
const ProfileLayout = () => {
  return (
      <Stack screenOptions={{headerShown: false}}/>
  )
}

export default ProfileLayout