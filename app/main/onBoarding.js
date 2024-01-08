import { View, Text } from 'react-native'
import React from 'react'
import { useAuth } from '../../context/AuthContext';
import { TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

export default function index() {

    const {signOut, getUser} = useAuth();
    const user = getUser();
    const handleSignOut = async () => {
        try{
            await signOut();
            router.replace('/signin');
        }catch(e){
            alert(e.message);
        }
    }
    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text>Ini adalah Halaman utama</Text>
        <Text>email : {user.email}</Text>
        <TouchableOpacity onPress={handleSignOut}>
        <Text>Sign Out</Text>
        </TouchableOpacity>
        </View>
    )
}