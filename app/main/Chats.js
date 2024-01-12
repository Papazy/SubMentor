import React from 'react'
import { useAuth } from '../../context/AuthContext';
import { router, } from 'expo-router';
import { ActivityIndicator, ScrollView, Image, View, Text, SafeAreaView, StatusBar } from 'react-native'
import Colors from '@Assets/Colors';
import { styles } from '@Assets/style/styles';

// icons
import { Feather } from '@expo/vector-icons';

export default function Chats() {

    return (
        <ScrollView contentInsetAdjustmentBehavior="automatic">
            <SafeAreaView style={{ marginTop: StatusBar.currentHeight+15, marginHorizontal:10, }}>
                {/* Header */}
                <View style={[styles.flexRow, styles.spaceBetween, {alignItems:'center'}]}>
                    <Text style={{fontSize:18, fontFamily:'inter_regular', fontWeight:'700'}}>Messages</Text>
                    <Feather name="search" size={28} color="black" />
                </View>
                {/* List Chat */}
                <View style={{paddingHorizontal:5, paddingTop:20, gap:15}}>
                    {/* Card */}
                    <View style={[styles.flexRow, {gap:10, alignItems:'center' }]}>
                        <View>
                            <Image source={require('../../assets/images/profile.jpg')} style={{ width: 60, height: 60, borderRadius: 100 }} />
                        </View>
                        <View style={{flex:1}}>
                            <View style={[styles.flexRow, styles.spaceBetween]}>
                                <Text style={{fontSize:15, fontFamily:'inter_regular', fontWeight:'700'}}>Aditya</Text>
                                <Text style={{fontSize:13, fontFamily:'inter_regular', fontWeight:'400'}}>5 mins ago</Text>
                            </View>
                            <Text style={{fontSize:13, fontFamily:'inter_regular', fontWeight:'400'}} numberOfLines={1}>Halo Apa kabar? bagaimana kabarmu. perkenalkan nama saya fajry</Text>
                        </View>
                    </View>

                    <View style={[styles.flexRow, {gap:10, alignItems:'center' }]}>
                        <View>
                            <Image source={require('../../assets/images/profile.jpg')} style={{ width: 60, height: 60, borderRadius: 100 }} />
                        </View>
                        <View style={{flex:1}}>
                            <View style={[styles.flexRow, styles.spaceBetween]}>
                                <Text style={{fontSize:15, fontFamily:'inter_regular', fontWeight:'700'}}>Fajry</Text>
                                <Text style={{fontSize:13, fontFamily:'inter_regular', fontWeight:'400'}}>5 mins ago</Text>
                            </View>
                            <Text style={{fontSize:13, fontFamily:'inter_regular', fontWeight:'400', color:'#5E5E5E'}} numberOfLines={1}>Saya sangat bersemangat mengikut Hackfest 2024 !</Text>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}