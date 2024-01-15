import { AntDesign, Feather, FontAwesome, Entypo, Ionicons } from '@expo/vector-icons'
import { Text, TouchableOpacity, View, Image, ScrollView } from 'react-native'
import React from 'react'

import Colors from '@Assets/Colors'
import { styles } from '@Assets/style/styles'
import { useAuth } from '../../context/AuthContext'
import { ActivityIndicator } from 'react-native'
import { getUserWithId } from '@Services/UserServices'

const MentoringRequestCard = ({item}) => {

    const [isLoading, setIsLoading] = React.useState(true);
    const [user, setUser] = React.useState();

    React.useEffect(() => {
        const getUserData = async () => {
            const currUser = await getUserWithId(item.userId);
            console.log('Mendapati user');
            console.log(currUser);
            setUser(currUser);
            setIsLoading(false);
        
        }
        getUserData();
    }, [])

    if(isLoading) return (<View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <ActivityIndicator />
    </View>)

    return (
       
        <View style={styles.kartuUpcoming}>
            <View style={[styles.flexRow, styles.spaceBetween]}>
                <View style={[styles.flexRow, { alignItems: 'center', gap: 15 }]}>
                    <Image source={require('../../assets/images/profile.jpg')} style={styles.fotoProfileMentoring} />
                    <View>
                        <Text style={[styles.white, { fontFamily: 'poppins_bold', fontSize: 18 }]}>{user.name}</Text>
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
            <View style={styles.garisBawah}></View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 10, gap: 10 }}>
        <View style={{ ...styles.card_green, flexDirection: 'row', alignItems:'center', justifyContent:'center', gap:5 }}>
          <AntDesign name="check" size={16} color="white" />
          <Text style={{ fontFamily: 'poppins_regular', fontSize: 14, color: '#fff' }}>Accept</Text>
        </View>
        <View style={{ ...styles.card_red, flexDirection: 'row', alignItems:'center', justifyContent:'center', gap:5 }}>
          <Entypo name="cross" size={16} color="white" />
          <Text style={{ fontFamily: 'poppins_regular', fontSize: 14, color: '#fff' }}>Denied</Text>
        </View>
        <View style={{ ...styles.card_gray, flexDirection: 'row', alignItems:'center', justifyContent:'center', gap:5 }}>
          <Ionicons name="chatbubble-ellipses-outline" size={16} color="white" />
          <Text style={{ fontFamily: 'poppins_regular', fontSize: 14, color: '#fff' }}>Chat</Text>
        </View>
      </View>
        </View>
       
    )
}

export default MentoringRequestCard