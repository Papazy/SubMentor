
import React from 'react'
import { Stack, useRouter } from 'expo-router'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'

SplashScreen.preventAutoHideAsync();


export default function RootLayout() {

const router = useRouter();
  const [fontsLoaded] = useFonts({
    poppins_regular: require('../assets/fonts/Poppins-Regular.ttf'),
    poppins_bold: require('../assets/fonts/Poppins-Bold.ttf'),
    poppins_semibold: require('../assets/fonts/Poppins-SemiBold.ttf'),
    poppins_italic: require('../assets/fonts/Poppins-Italic.ttf'),
    poppins_light: require('../assets/fonts/Poppins-Light.ttf'),
  })

  React.useEffect(()=>{
    if(fontsLoaded){
        SplashScreen.hideAsync();
    }
  },[fontsLoaded]);


  if(!fontsLoaded) return null;
  return (
    <Stack screenOptions={{ headerShown: false }} />
  )
}