import { View, Text, ScrollView, SafeAreaView, StatusBar, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import UpComingCard from '@Assets/components/UpComingCard'
import { Entypo } from '@expo/vector-icons'
import {useNavigation} from 'expo-router'

import {styles} from '@Assets/style/styles'
import Colors from '@Assets/Colors'
const Package = () => {
    const navigation = useNavigation()
    return (
        <ScrollView contentInsetAdjustmentBehavior="automatic">
            <SafeAreaView style={{ marginTop: 15, marginHorizontal: 10, }}>
                {/* Header Profile */}
                <View style={[styles.flexRow, {alignItems:'center', gap:10, paddingHorizontal:16}]}>
                    <View>
                        <Image source={require('../../assets/images/profile.jpg')} style={{ height: 70, width: 70, borderRadius: 100 }} />
                    </View>
                    <View>
                        <Text style={{fontSize:16, marginLeft:5}}>Papazy</Text>
                        <Text style={[styles.textLight, {marginLeft:5}]}>Math Mentor</Text>

                        <View style={[styles.flexRow, {marginTop:3}]}>
                            <Entypo name="location-pin" size={24} color={Colors.ungu} />
                            <Text style={{ color: Colors.text_secondary, fontFamily: 'inter_regular', fontSize: 14 }}>Banda Aceh, Aceh, Indonesia</Text>
                        </View>

                    </View>
                </View>
                <View style={styles.garisBawah}></View>
                {/* Portofolio */}
                <View></View>
                {/* About */}
                <View></View>
                {/* Day */}
                <View></View>
                {/* Time */}
                <View></View>
                {/* button */}
                <View>
                    <TouchableOpacity style={styles.button} onPress={()=>{}}>
                        <Text style={styles.buttonLabel}>Book 2 Appoinment</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}

export default Package