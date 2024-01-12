import React from 'react'
import { useAuth } from '../../context/AuthContext';
import { router, } from 'expo-router';
import { ActivityIndicator, ScrollView, TouchableOpacity, View, Text, SafeAreaView, StyleSheet, Image } from 'react-native'
import Colors from '../../assets/Colors';


// icons
import { MaterialCommunityIcons, Entypo, FontAwesome, AntDesign, Feather } from '@expo/vector-icons';
const UpComingCard = ({user}) => {
    return (
        <>
            
            <View style={styles.kartuUpcoming}>
                <View style={[styles.flexRow, styles.spaceBetween]}>
                    <View style={[styles.flexRow, { alignItems: 'center', gap: 15 }]}>
                        <Image source={require('../../assets/images/profile.jpg')} style={styles.fotoProfileMentoring} />
                        <View>
                            <Text style={[styles.white, { fontFamily: 'poppins_bold', fontSize: 18 }]}>Fajry</Text>
                            <Text style={[styles.white, { fontFamily: 'poppins_regular', fontSize: 14 }]}>General</Text>
                        </View>

                    </View>
                    <TouchableOpacity style={{ backgroundColor: 'white', borderRadius: 100, width: 40, height: 40, justifyContent: 'center', alignItems: 'center' }}>
                        <FontAwesome name="phone" size={24} color={Colors.ungu} />
                    </TouchableOpacity>
                </View>
                <View style={styles.garisBawah}></View>
                <View style={styles.subKartuUpcoming}>
                    <View style={[styles.flexRow, { alignItems: 'baseline', gap: 5 }]}>
                        <AntDesign name="calendar" size={18} color={Colors.ungu} />
                        <Text style={styles.textInformation}>Sunday, 12 June</Text>
                    </View>
                    <View style={[styles.flexRow, { alignItems: 'baseline', gap: 5 }]}>
                        <Feather name="clock" size={18} color={Colors.ungu} />
                        <Text style={styles.textInformation}>11:00 - 12:00 AM</Text>
                    </View>
                </View>
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    flexRow: {
        flexDirection: 'row',
    },
    spaceBetween: {

        alignItems: 'center',
        justifyContent: 'space-between',
    },
    searchBar: {
        backgroundColor: '#F2F2F2',
        borderRadius: 10,
        borderColor: '#E0E0E0',
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10,
        marginVertical: 14,
        gap: 10,
    },
    fotoProfileMentoring: {
        width: 65,
        height: 65,
        borderRadius: 100,
    },
    subtitle: {
        fontSize: 18,
        fontFamily: 'inter_regular',
        color: 'black',
    },
    seeAll: {
        color: Colors.ungu,
        fontFamily: 'inter_regular',
        fontSize: 14,
    },
    kartuUpcoming: {
        backgroundColor: Colors.ungu,
        borderRadius: 20,
        padding: 15,
        marginVertical: 10,
    },
    subKartuUpcoming: {
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        padding: 15,
        borderRadius: 10,
        marginTop: 10,
    },
    white: {
        color: 'white'
    },
    garisBawah: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginBottom: 5,
        marginTop: 12,
    },
    textInformation: {
        color: Colors.ungu,
        fontFamily: 'poppins_regular',
        fontSize: 13,
    },

})
export default UpComingCard