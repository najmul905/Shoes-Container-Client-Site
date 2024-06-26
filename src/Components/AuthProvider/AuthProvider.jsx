import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, deleteUser, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../Firebase/Firebase';
export const AuthContext=createContext(null)
const auth = getAuth(app);

const AuthProvider = ({children}) => {
const [user,setUser]=useState(null)
const [loading,setLoading]=useState(true)
const googleProvider=new GoogleAuthProvider()

// Create User with email,password
const createUser=(email,password)=>{
    setLoading(true)
   return createUserWithEmailAndPassword(auth,email,password)
}
// delete user
const DeleteUser=(user)=>{
   return deleteUser(user)
}
// LogOut
const logOut=()=>{
    setLoading(true)
    return signOut(auth)
}
// update User
const updateUserProfile=(name,image)=>{
    return updateProfile(auth.currentUser,{
      displayName:name,photoURL:image
    })
  }

// google LogIn

const googleLogIn=()=>{
    setLoading(true)
    return signInWithPopup(auth,googleProvider)
}
// Image hosting URL
const image_hosting_url = import.meta.env.VITE_image_hosting_url
console.log(image_hosting_url)



// LogIn
const logIn=(email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password)
}
useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser)
        // console.log("current User",currentUser)
        setLoading(false)
    });
    return()=>{
        return unsubscribe;
    }
},[])

    const AuthInfo={user,loading,createUser,logIn,logOut,googleLogIn,
        updateUserProfile,image_hosting_url,DeleteUser}
    return (
       <AuthContext.Provider value={AuthInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;