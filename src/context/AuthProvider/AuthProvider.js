import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut, sendEmailVerification } from "firebase/auth";
import { app } from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ( { children } ) => {

    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);

    const provider = new GoogleAuthProvider();


    const creatUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signIn =(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    
    const googleSignIn =()=>{
        
        return signInWithPopup(auth,provider);
    }

    const logOut = () =>{
        return signOut(auth);
    }


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unsubscribe();
        }   
    },[])
    const verifyEmail =()=>{
        return sendEmailVerification(auth.currentUser);
    }
    const authInfo ={
        user,
        loading,
        setLoading,
        creatUser,
        signIn,
        googleSignIn,
        logOut,
        verifyEmail,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;