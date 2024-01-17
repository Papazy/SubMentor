import React, { useEffect } from 'react'
import { useAuth } from '@Context/AuthContext';
import { router, } from 'expo-router';
import { ActivityIndicator, ScrollView, Image, View, Text, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native'
import Colors from '@Assets/Colors';
import { styles } from '@Assets/style/styles';

import moment from 'moment';


// icons
import { Feather } from '@expo/vector-icons';

import { listenToUserChats, updateIsReadedChatRoomId } from '@Services/ChatServices';
import { QuerySnapshot, onSnapshot } from 'firebase/firestore';

export default function index() {
    const [chatRooms, setChatRooms] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    

    const { user } = useAuth();
    useEffect(() => {
        listenToUserChats(user.uid, (chatRooms) => {
            // Update the state with the new chat data
            setChatRooms((prevChatRooms) => {
                const existingIndex = prevChatRooms.findIndex(item => item.id === chatRooms.id);

                // If it exists, update it; otherwise, add a new one
                if (existingIndex !== -1) {
                    const updatedChats = [...prevChatRooms];
                    updatedChats[existingIndex] = chatRooms;
                    return updatedChats;
                } else {
                    return [...prevChatRooms, chatRooms];
                }
            });
            setIsLoading(false);
        });

        

    }, []);

    const handleGoToChatRoom = (chatRoomId, partnerName) => {
        console.log("chatRoomId");
        console.log(chatRoomId);
        updateIsReadedChatRoomId(chatRoomId);
        const pathname = `/main/Chats/${chatRoomId}`;
        
        router.push({pathname:pathname, params:{id:chatRoomId, partnerName: partnerName}});
    }

    const getTimeDisplay = (sentAtDate) => {
        const currentMoment = moment();
        const sentMoment = moment(sentAtDate);

        const durationInHours = currentMoment.diff(sentMoment, 'hours');

        if (durationInHours < 24) {
            return sentMoment.format("H:mm");
        } else if (durationInHours < 48) {
            return 'Yesterday';
        } else {
            return sentMoment.format("D MMMM");
        }
    };

    return (
        <ScrollView contentInsetAdjustmentBehavior="automatic">
            <SafeAreaView style={{ marginTop: StatusBar.currentHeight + 15, marginHorizontal: 10, }}>
                {/* Header */}
                <View style={[styles.flexRow, styles.spaceBetween, { alignItems: 'center' }]}>
                    <Text style={{ fontSize: 18, fontFamily: 'inter_regular', fontWeight: '700' }}>Messages</Text>
                    <Feather name="search" size={28} color="black" />
                </View>
                {/* List Chat */}
                {isLoading ? <ActivityIndicator /> : chatRooms.map((item, index) => {
                    return (
                        <TouchableOpacity onPress={()=>handleGoToChatRoom(item.id, item.partner.name)} key={index} style={{ paddingHorizontal: 5, paddingTop: 20, gap: 15 }}>
                            {/* Card */}

                            <View  style={[styles.flexRow, { gap: 10, alignItems: 'center' }]}>
                                <View>
                                    <Image source={require('../../../assets/images/profile.jpg')} style={{ width: 60, height: 60, borderRadius: 100 }} />
                                </View>
                                <View style={{ flex: 1 }}>
                                    <View style={[styles.flexRow, styles.spaceBetween]}>
                                        <Text style={{ fontSize: 15, fontFamily: 'inter_regular', fontWeight: '700' }}>{item.partner.name}</Text>
                                    {!item.chatRoomData.recentMessage.isReaded && item.chatRoomData.recentMessage.senderId !== user.uid ? 
                                        <Text style={{ fontSize: 13, fontFamily: 'inter_bold', fontWeight: '400' }}>{getTimeDisplay(item.chatRoomData.recentMessage.sentAt.toDate())}</Text> : 
                                        <Text style={{ fontSize: 13, fontFamily: 'inter_regular', fontWeight: '400' }}>{getTimeDisplay(item.chatRoomData.recentMessage.sentAt.toDate())}</Text> } 
                                    </View>
                                    {!item.chatRoomData.recentMessage.isReaded && item.chatRoomData.recentMessage.senderId !== user.uid ? 
                                    <Text style={{ fontSize: 13, fontFamily: 'inter_bold', fontWeight: '400', color: 'black' }} numberOfLines={1}>{item.chatRoomData.recentMessage.messageText}</Text> :
                                    <Text style={{ fontSize: 13, fontFamily: 'inter_regular', fontWeight: '400', color: '#5E5E5E' }} numberOfLines={1}>{item.chatRoomData.recentMessage.messageText}</Text> }
                                </View>
                            </View>
                        </TouchableOpacity >

                    )
                })}
            </SafeAreaView>
        </ScrollView>
    )
}

// {/* Card */}
// <View style={[styles.flexRow, {gap:10, alignItems:'center' }]}>
//     <View>
//         <Image source={require('../../../assets/images/profile.jpg')} style={{ width: 60, height: 60, borderRadius: 100 }} />
//     </View>
//     <View style={{flex:1}}>
//         <View style={[styles.flexRow, styles.spaceBetween]}>
//             <Text style={{fontSize:15, fontFamily:'inter_regular', fontWeight:'700'}}>Aditya</Text>
//             <Text style={{fontSize:13, fontFamily:'inter_regular', fontWeight:'400'}}>5 mins ago</Text>
//         </View>
//         <Text style={{fontSize:13, fontFamily:'inter_regular', fontWeight:'400'}} numberOfLines={1}>Halo Apa kabar? bagaimana kabarmu. perkenalkan nama saya fajry</Text>
//     </View>
// </View>