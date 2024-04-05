import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { app } from '../Firebase/Firebase';
export const AuthContext=createContext(null)
const auth = getAuth(app);

const AuthProvider = ({children}) => {
const [user,setUser]=useState(null)
const [loading,setLoading]=useState(true)

const createUser=(email,password)=>{
    setLoading(true)
   return createUserWithEmailAndPassword(auth,email,password)
}

const SingIn=(email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(email,password)
}
useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser)
        console.log("current User",currentUser)
        setLoading(false)
    });
    return()=>{
        return unsubscribe;
    }
},[])

    const AuthInfo={user,loading,createUser,SingIn}
    return (
       <AuthContext.Provider value={AuthInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;