import { View, Text } from 'react-native'
import { AuthProvider } from '../../context/AuthContext';
import {useAuth} from '../../context/AuthContext'
import {Stack} from 'expo-router'
import React from 'react'

export default function appLayout() {

  
  return (
      <Stack 
         initialRouteName='index'
         screenOptions={{
           headerShown:false
         }}
      />
  )
}