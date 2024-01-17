import { db } from "../utils/firebaseConfig";
import { addDoc, doc, getDoc, getDocs, collection, query, where, updateDoc, onSnapshot } from 'firebase/firestore'


export const createChatWithUserId = async (userId, patnerId) => {
    try{
        const chatRef = collection(db, 'chats');
        const chatSnap = await addDoc(chatRef, {
            participants : [userId, patnerId],
            messages :[]

        })

        const user1Ref = doc(db, 'users', userId);
        const chatRooms = (await getDoc(user1Ref)).data().chatRooms;
        chatRooms.push(chatSnap.id);
        await updateDoc(user1Ref, {chatRooms: chatRooms})

        const user2Ref = doc(db, 'users', patnerId);
        const chatRooms2 = (await getDoc(user2Ref)).data().chatRooms;
        chatRooms2.push(chatSnap.id);
        await updateDoc(user1Ref, {chatRooms: chatRooms2})

        return chatSnap.id;
    }catch(error){
        alert(error.message)
        return null;
    }
}

export const onSend = async (chatId, message) => {
    try{
        const chatRef = doc(db, 'chats', chatId);
        const chatSnap = await getDoc(chatRef);
        if(chatSnap.empty){
            console.log('Chat not found');
            return null;
        }
        const chatData = chatSnap.data();
        const messages = chatData.messages;
        messages.push(message);
        await chatRef.update({
            messages: messages
        })
        return true;
    }catch(error){
        alert(error.message)
        return null;
    }
}

export const listenToUserChats = async (userId, callback) => {
    const userRef = doc(db, 'users', userId);
    const chatRooms = (await getDoc(userRef)).data().chatRooms;

    chatRooms.forEach((chatRoomId) => {
        const chatRoomRef = doc(db, 'chats', chatRoomId);

        onSnapshot(chatRoomRef, (chatRoomSnap) => {
            const chatRoomData = chatRoomSnap.data();
            
            if (!chatRoomData) {
                console.log('Chat room data not found');
                return;
            }

            const partnerId = chatRoomData.participants.find((item) => item !== userId);
            const partnerRef = doc(db, 'users', partnerId);
            
            getDoc(partnerRef).then((partnerSnap) => {
                const partnerData = partnerSnap.data();
                const chatRoom = {
                    id: chatRoomId,
                    partner: partnerData,
                    chatRoomData: chatRoomData,
                };
                callback(chatRoom);
            }).catch((error) => {
                console.error('Error getting partner data:', error);
            });
        });
    });
};

export const updateIsReadedChatRoomId = async (chatRoomId) => {
    try{
        const chatRoomRef = doc(db, 'chats', chatRoomId);
        await updateDoc(chatRoomRef, {
            'recentMessage.isReaded' : true
        })
        return true;
    }catch(error){
        alert(error.message)
        console.log(error.message)
        return null;
    }
}

export const getPartnerIdFromChatId = async (chatId, userId) => {
    try{
        const chatRef = doc(db, 'chats', chatId);
        const chatSnap = await getDoc(chatRef);
        if(chatSnap.empty){
            console.log('Chat not found');
            return null;
        }
        const chatData = chatSnap.data();
        const participants = chatData.participants;
        const partnerId = participants.find((item) => item !== userId);
        console.log('partnerId')
        console.log(partnerId)
        console.log('userId')
        console.log(userId)
        
        const partnerRef = doc(db, 'users', partnerId);
        const partnerSnap = await getDoc(partnerRef);
        if(partnerSnap.empty){
            console.log('User not found');
            return null;
        }
        const partnerData = partnerSnap.data();
        return partnerData;
    }catch(error){
        alert(error.message)
        return null;
    }
}