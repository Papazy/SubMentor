import { db } from "../utils/firebaseConfig";
import { addDoc, doc, getDoc, getDocs, collection, query, where, updateDoc } from 'firebase/firestore'


export const createChatWithUserId = async (userId, patnerId) => {
    try{
        const chatRef = collection(db, 'chats');
        const chatSnap = await addDoc(chatRef, {
            participant : [userId, patnerId],
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

export const getChatUserId = async (userId) => {
    const userRef = doc(db, 'users', userId);
    const chatRooms = (await getDoc(userRef)).data().chatRooms;
    if(chatRooms.length === 0){
        console.log('Chat not found');
        return null;
    }
    return chatRooms;
}