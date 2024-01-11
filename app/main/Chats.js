import React from 'react'
import { useAuth } from '../../context/AuthContext';
import { router,  } from 'expo-router';
import { ActivityIndicator,ScrollView,TouchableOpacity,View, Text, SafeAreaView } from 'react-native'



// icons
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Chats() {

    return (
        <ScrollView contentInsetAdjustmentBehavior="automatic">
            <SafeAreaView>
                <View style={{justifyContent:'center', alignItems:'center'}}><Text>Ini halaman Chat</Text></View>
            </SafeAreaView>
        </ScrollView>
    )
}