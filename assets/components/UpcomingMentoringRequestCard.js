import { AntDesign, Feather, FontAwesome, Entypo, Ionicons } from '@expo/vector-icons'
import { Text, TouchableOpacity, View, Image, ScrollView } from 'react-native'
import React from 'react'

import Colors from '@Assets/Colors'
import { styles } from '@Assets/style/styles'

const UpcomingMentoringRequestCard = () => {

    return (

        <View style={styles.kartuUpcoming}>
            <View style={[styles.flexRow, styles.spaceBetween]}>
                <View style={[styles.flexRow, { alignItems: 'center', gap: 15 }]}>
                    <Image source={require('../../assets/images/profile.jpg')} style={styles.fotoProfileMentoring} />
                    <View>
                        <Text style={[styles.white, { fontFamily: 'poppins_bold', fontSize: 18 }]}>Fajry</Text>
                        <Text style={[styles.white, { fontFamily: 'poppins_regular', fontSize: 14 }]}>Math</Text>
                    </View>

                </View>
                <View style={styles.subKartuUpcomingColumn}>
                    <View style={[styles.flexRow, { alignItems: 'baseline', gap: 5 }]}>
                        <AntDesign name="calendar" size={16} color={Colors.ungu} />
                        <Text style={styles.textInformation3}>Sunday, 12 June</Text>
                    </View>
                    <View style={[styles.flexRow, { alignItems: 'baseline', gap: 5 }]}>
                        <Feather name="clock" size={16} color={Colors.ungu} />
                        <Text style={styles.textInformation3}>11:00 - 12:00 AM</Text>
                    </View>
                </View>
            </View>
            
        </View>

    )
}

export default UpcomingMentoringRequestCard