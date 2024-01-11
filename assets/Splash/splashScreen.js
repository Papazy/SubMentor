import React from "react";
import LottieView from "lottie-react-native";
import {View, Text} from 'react-native'
export default function SplashScreen() {

    const animation = React.useRef(null);

  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <LottieView 
            style={{width:300, height:300}}
            source={require("./splash.json")} 
            autoPlay 
            loop />
    </View>
  );
}