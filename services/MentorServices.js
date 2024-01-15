import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../utils/firebaseConfig";
import { Redirect } from 'expo-router'
import { addDoc, doc, getDoc, getDocs, collection, query, where } from 'firebase/firestore'


export const getAllMentors = async () => {
    const mentors = [];
    const mentorsRef = collection(db, 'mentors');
    const mentorsSnap = await getDocs(mentorsRef);
    mentorsSnap.forEach((doc) => {
        mentors.push(doc.data());
    });
    console.log('Mentors:')
    console.log(mentors);
    return mentors;
}


export const getAllMentorsWithUserData = async () => {
    const mentors = [];
    const mentorsRef = collection(db, 'mentors');
    const mentorsSnap = await getDocs(mentorsRef);

    await Promise.all(mentorsSnap.docs.map(async (doc) => {
        const userRef = query(collection(db, 'users'), where('uid', '==', doc.data().uid));
        const userSnap = await getDocs(userRef);
        if (userSnap.empty) {
            console.log('User not found');
            return null;
        }
        const userData = userSnap.docs[0].data();
        mentors.push({
            ...doc.data(),
            name: userData.name,
            email: userData.email,
        })
    }));
    return mentors;
}

export const getMentorWithId = async (userId) => {
    
    const mentorRef = collection(db, 'mentors');
    const mentorSnap = await getDocs(query(mentorRef, where('uid', '==', userId)));
    const mentorUserData = await getDocs(query(collection(db, 'users'), where('uid', '==', userId)))
    console.log("Data Mentor yang diraih :")
    console.log(mentorUserData)
    console.log(mentorSnap)
    if(mentorUserData.empty || mentorSnap.empty){
        console.log('Tidak menemukan User');
        return null;
    }
    const userData =  mentorUserData.docs[0].data();
    const mentorData = mentorSnap.docs[0].data();

    const mentorValue = {
        ...mentorData,
        ...userData,
    }
    console.log(mentorValue);
    return mentorValue;
}

export const bookMentor = async (userIdBook, mentorIdBook) => {
    try{
        const docRef = await addDoc(collection(db, 'bookings'), {
        mentorId : mentorIdBook,
        userId : userIdBook,
        status: 'pending',
    });

        console.log()
    return docRef.id;
    }catch(e){
        console.log(e);
        return null;
    }   
}

export const getAllMentoringSessionsFromMentor = async (mentorId) => {
    const mentoringSessions = [];
    const mentoringSessionsRef = collection(db, 'bookings');
    const mentoringSessionsSnap = await getDocs(query(mentoringSessionsRef, where('mentorId', '==', mentorId)));
    mentoringSessionsSnap.forEach((doc) => {
        mentoringSessions.push(doc.data());
    });
    console.log('Mentoring Sessions:')
    console.log(mentoringSessions);
    return mentoringSessions;
}

export const getAllPendingMentoringSessionsFromMentor = async (mentorId) => {
    const mentoringSessions = [];
    const mentoringSessionsRef = collection(db, 'bookings');
    const mentoringSessionsSnap = await getDocs(query(mentoringSessionsRef, where('mentorId', '==', mentorId), where('status', '==', 'pending')));
    mentoringSessionsSnap.forEach((doc) => {
        mentoringSessions.push(doc.data());
    });
    console.log('Mentoring Sessions:')
    console.log(mentoringSessions);
    return mentoringSessions;
}


export const checkIfUserIsMentor = async (userId) => {
    const mentorSnap = await getDoc(doc(db, 'users', userId));
    const mentorData = mentorSnap.data();

    return mentorData.isMentor;
}


