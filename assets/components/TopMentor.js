import React from 'react'
import { useAuth } from '../../context/AuthContext';
import { router, } from 'expo-router';
import { ActivityIndicator, ScrollView, TouchableOpacity, View, Text, SafeAreaView, StyleSheet, Image } from 'react-native'
import Colors from '../../assets/Colors';
import {styles} from '../style/styles';


// icons
import { MaterialCommunityIcons, Entypo, FontAwesome, AntDesign, Feather } from '@expo/vector-icons';
import { TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const TopMentor = ({ user, subject }) => {
    return (
        <>
            
            {/* Kartu */}
            <View style={styles.borderLight}>
                <View style={[ styles.flexRow, {gap: 10, width:'100%'}]}>
                    <Image source={require('../../assets/images/profile.jpg')} style={{ width: 80, height: 105, borderRadius: 10 }} />
                    <View  style={{gap:5}}>
                        <View style={[styles.flexRow, styles.spaceBetween]}>
                            <View style={[styles.flexRow,{backgroundColor: Colors.lightBlue, paddingHorizontal:10, paddingVertical:3, gap:5, alignItems:'center', borderRadius:30}]}>
                                <MaterialIcons name="verified" size={24} color={Colors.ungu} />
                                <Text style={styles.textInformation2}>Professional Mentor</Text>
                            </View>
                            <View>
                                <FontAwesome name="heart-o" size={24} color={Colors.text_secondary} />
                            </View>
                        </View>
                        <View>
                            <Text style={{fontSize:16}}>Papazy</Text>
                            <Text style={{color:Colors.text_secondary, fontSize:14}}>{subject} Mentor</Text>
                        </View>
                        <View style={[styles.flexRow, {alignItems:'center'}]}>
                            <View style={[styles.flexRow, {alignItems:'center', gap:5}]}>
                                <View style={[styles.flexRow]}>

                                    <FontAwesome name="star" size={24} color={Colors.yellowStar} />
                                    <FontAwesome name="star" size={24} color={Colors.yellowStar} />
                                    <FontAwesome name="star" size={24} color={Colors.yellowStar} />
                                    <FontAwesome name="star" size={24} color={Colors.yellowStar} />
                                    <FontAwesome name="star-o" size={24} color={Colors.yellowStar} />
                                </View>
                                <Text style={[styles.textLight, {color:'black', fontSize:14}]}>4.0</Text>
                            </View>
                            <View style={styles.garisSamping}></View>
                            <Text style={styles.textLight}>500 Reviews</Text>
                        </View>
                    </View>
                </View>
                <View style={{backgroundColor:Colors.lightBlue, padding: 12, borderRadius:10, marginTop:10 }}>
                    {/* appointment */}
                    <Text style={{textAlign:'center', color:Colors.ungu, fontSize:16}}>Make Appointment</Text>
                </View>
            </View>
        </>
    )
}

export default TopMentor