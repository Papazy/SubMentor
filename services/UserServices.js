import { auth, db } from "../utils/firebaseConfig";
import { addDoc, doc, getDoc, getDocs, collection, query, where } from 'firebase/firestore'


export const getUserWithId = async (userId) => {
    const userRef = doc(db, 'users', userId);
    const userSnap = await getDoc(userRef);
    if(userSnap.empty){
        console.log('Tidak menemukan User');
        return null;
    }
    const userData = userSnap.data();
    return userData;
}