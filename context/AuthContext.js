import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../utils/firebaseConfig";
import { Redirect } from 'expo-router'

const AuthContext = createContext();

// untuk menggunakan
export const useAuth = () => {
    return useContext(AuthContext);
}
// untuk memberikan provider
export const AuthProvider = ({ children}) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        const currUser = onAuthStateChanged(auth, (userCredential)=>{
            setUser(userCredential);
            setIsLoading(false);
        });

        return currUser;
    },[])
    function getUser(){
        return user;
    }
    function signUp(email, password){
        console.log("Create new user")
        return auth.createUserWithEmailAndPassword(email, password);
    }
    function login(email, password){
        console.log("User Login")
        return auth.signInWithEmailAndPassword(email, password);
    }
    function signOut(){
        console.log("User Sign Out")
        return auth.signOut();
    }
    const value = {
        user,
        setUser,
        getUser,
        login,
        signUp,
        signOut
    }
    console.log(user);
    if(isLoading) return null;
    if(!user){
        console.log('Redirect to signin');
        
        return <Redirect href='/signin'/>;
    } 
    return(
        <AuthContext.Provider value={value} >
            {!isLoading && children}
        </AuthContext.Provider>
    )
}

