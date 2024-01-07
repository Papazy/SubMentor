import React from 'react'
// Material
import { router } from 'expo-router';
import { Link } from 'expo-router'
import { View, Text, SafeAreaView, Button, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import Colors from '../../assets/Colors';

import {auth} from '../../utils/firebaseConfig'
import { createUserWithEmailAndPassword } from 'firebase/auth';

// Google

const signup = ({navigation}) => {
  
  const [showPassword, setShowPassword] = React.useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  }
  
  // value
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [fullname, setFullname] = React.useState('');
  const [user, setUser] = React.useState(null);
  
  // function
  const handleSignUp = async () => {
    if(!email || !password || !fullname) return alert('Please fill all the form');
    try{
      const response = await createUserWithEmailAndPassword(auth, email, password)
      console.log(response);
      setUser(response);
      router.replace('/')
    }catch(e){
      alert(e.message);
    }
  }

  return (
    <SafeAreaView style={{ height: '100%' }}>

      <Image
        source={require('../../assets/images/latar.png')}
        style={styles.latar}
      />


      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Text style={{ fontFamily: 'poppins_bold', fontSize: 24, color: Colors.text_primary, textAlign:'center' }}>Create Account</Text>
          <Text style={{ fontFamily: 'poppins_regular', fontSize: 14, color: Colors.text_secondary, textAlign:'center' }}>Fill your information bellow or register  with your social account</Text>
        </View>
        <View style={{}}>
          <View>
            <Text style={styles.subtitle}>Full Name</Text>
            <TextInput style={styles.inputWrapper} placeholder='Your name' value={fullname} onChangeText={(text) => setFullname(text)}/>
          </View>
          <View>
            <Text style={styles.subtitle}>Email</Text>
            <TextInput style={styles.inputWrapper} placeholder='user@gmail.com' value={email} onChangeText={(text) => setEmail(text)}/>
          </View>
          <View>
            <Text style={styles.subtitle}>Password</Text>
            <View style={[styles.inputWrapper, { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }]}>
              <TextInput placeholder='Password' secureTextEntry={!showPassword} value={password} onChangeText={(text) => setPassword(text)}/>
              {showPassword ? <MaterialIcons name="visibility" size={24} color="black" onPress={handleShowPassword} /> : <MaterialIcons name="visibility-off" size={24} color="black" onPress={handleShowPassword} />}

            </View>
          </View>
          <Link href='/signin' style={{ textAlign: 'right', color: '#722080', marginTop: 4, marginEnd: 3, fontSize: 15 }}>Forgot Password?</Link>
        </View>

        <View style={styles.footerWrapper}>
          <TouchableOpacity style={[styles.button,]} onPress={() => handleSignUp()}><Text style={[styles.button_label, { color: 'white' }]}>Sign Up</Text></TouchableOpacity>
          <Text style={[styles.very_light_title, styles.center]}>Or sign up with</Text>
          <TouchableOpacity style={styles.button_google}  ><Image source={require('../../assets/images/google.png')} /></TouchableOpacity>
          <Text style={[styles.light_title, styles.center]}>Already have an account? <Link style={{ color: 'blue', fontFamily: 'poppins_semibold', }} href='/signin'>Log in</Link></Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

  latar: {
    width: '100%',
    height: '40%',
    resizeMode: 'cover'
  },
  container: {
    position: 'absolute',
    elevation: 5,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'white',
    paddingTop: 30,
    paddingHorizontal: 20,
    borderTopLeftRadius: 70,
  },
  wrapper: {
    marginBottom: 20,
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerWrapper: {
    marginTop: 10,
    paddingBottom: 15,
    // justifyContent:'center',
    // alignItems:'center',
  },
  subtitle: {
    color: Colors.text_primary,
    fontSize: 15,
    fontFamily: 'poppins_semibold',
    marginTop:5,
  },
  inputWrapper: {
    borderWidth: 1,
    borderColor: '#D1D1D1',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 0,
    fontFamily: 'poppins_regular',
    fontSize: 15,
    color: Colors.text_primary,
    height: 50,
    justifyContent: 'center'
  },
  very_light_title: {
    marginVertical: 10,
    textAlign: 'center',
    color: Colors.text_primary,
    fontFamily: 'poppins_regular',
    fontSize: 13,
  },
  light_title: {
    marginTop: 10,
    textAlign: 'center',
    color: Colors.text_primary,
    fontFamily: 'poppins_regular',
    fontSize: 15,
  },
  button: {
    backgroundColor: Colors.button_primary,
    color: 'white',
    fontFamily: 'poppins_semibold',
    fontSize: 15,
    borderRadius: 50,
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  button_google: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'none',
    fontFamily: 'poppins_semibold',
    fontSize: 15,
    borderRadius: 50,
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderColor: Colors.text_primary,
    borderWidth: 1
  },
  button_label: {
    textAlign: 'center',
    color: Colors.text_primary,
    fontFamily: 'poppins_regular',
    fontSize: 15,
  },


})

export default signup