import React from 'react'
import { useAuth } from '../../context/AuthContext';
import { router, } from 'expo-router';
import { ActivityIndicator, ScrollView, TextInput, View, Text, SafeAreaView, StatusBar } from 'react-native'
import Colors from '@Assets/Colors';
import { styles } from '@Assets/style/styles';


// icons
import { MaterialIcons } from '@expo/vector-icons';
import TopMentor from '@Assets/components/TopMentor'

export default function Mentor() {

    return (
        <ScrollView contentInsetAdjustmentBehavior="automatic">
            <SafeAreaView style={{marginTop:StatusBar.currentHeight+15, marginHorizontal:10}}>
            <View style={[styles.searchBarLarge, styles.spaceBetween]}>
                        <TextInput placeholder='search mentor or subject like math ' style={{fontSize:16}}/>
                        <MaterialIcons name="search" size={28} color={Colors.text_secondary} />
            </View>
            <TopMentor />
            </SafeAreaView>
        </ScrollView>
    )
}