import {Redirect, Slot, useRootNavigationState} from 'expo-router'

import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function index(){
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    async function onAuthStateChangedListener(userCredential){
        setUser(userCredential);
        if(userCredential) await AsyncStorage.setItem('user', JSON.stringify(userCredential))

        if(initializing) setInitializing(false);
    };
    const [userInStorage, setUserInStorage] = useState(null);
    useEffect(()=>{

        const subscriber = onAuthStateChanged(getAuth(), onAuthStateChangedListener);
        return subscriber;
    },[])

    if(initializing) return null;


    if(!user){
        console.log("INI USER IN STORAGE");
        console.log(userInStorage);
        if(!userInStorage) return <Redirect href='/signin'/>
    }
    console.log("INI USER");
    console.log(user)
    return <Redirect href='/app'/>



}
