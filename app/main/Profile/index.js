import { View, Text, Button } from 'react-native'
import React from 'react'
import { useAuth } from '@Context/AuthContext'
import {router} from 'expo-router'

const index = () => {

  const {signOut} = useAuth();

  const handleSignOut = () => {
    try{
      signOut();
      router.replace('/signin')
      alert("Anda telah keluar");
    }catch(e){
      alert(e.message);
    }
  }

  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Button title='Sign out' onPress={()=>handleSignOut()} />
    </View>
  )
}

export default index