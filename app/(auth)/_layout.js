import {Slot, router, useRouter} from 'expo-router'


import React from "react";
export default function RootLayout(){
    const router = useRouter();

    React.useEffect(()=>{
        router.push('/signin')
    },[])

    return <Slot/>
}