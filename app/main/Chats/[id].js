import { View, Text, ActivityIndicator } from 'react-native'
import React, { useState, useEffect, useCallback } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import { useLocalSearchParams } from 'expo-router'
import { getPartnerIdFromChatId } from '@Services/ChatServices'
import { Stack } from 'expo-router'
import { useAuth } from '@Context/AuthContext'

const ChatRoom = () => {

  const [messages, setMessages] = useState([])
  const { id, partnerName } = useLocalSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const [partner, setPartner] = useState({});
  const { user } = useAuth();


  useEffect(() => {
    console.log('partnerName')
    console.log(partnerName)
    const getUserData = async () => {
      const partnerData = await getPartnerIdFromChatId(id, user.uid);
      setPartner(partnerData);
      console.log('partnerData');
      console.log(partnerData);
      setIsLoading(false);
    }
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])
    getUserData();
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    )
  }, [])


  return (
    <>
      <Stack.Screen options={{ headerTitle: partnerName }} />

      {isLoading ? 
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator />
      </View> :
      // jika tidak loading
      (
        <GiftedChat
          messages={messages}
          onSend={messages => onSend(messages)}
          user={{
            _id: 1,
          }}
        />

      )}


    </>
  )
}

export default ChatRoom