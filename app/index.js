import {Redirect} from 'expo-router'
import React from 'react'
import {useAuth} from '../context/AuthContext'
import { onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import {auth} from '../utils/firebaseConfig'
import { ActivityIndicator } from 'react-native';


export default () => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        const currUser = onAuthStateChanged(auth, (userCredential)=>{
            setUser(userCredential);
            setIsLoading(false);
        });

        return currUser;
    },[])
if(isLoading) return <ActivityIndicator/>;
if(user) return <Redirect href='/main'/>

return <Redirect href='/onBoarding'/>
}