import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../Firebase/Firebase.config';

const auth = getAuth(app)
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()
    //creating user 
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //sign with email pass
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    //log out user
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    //update user name 
    const updateUserName = (name) => {
        return updateProfile(auth.currentUser, {
            displayName: `${name}`
        })
    }
    //google log in
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }
    //github login
    const githubLogin = () => {
        return signInWithPopup(auth,githubProvider)
    }
    //auth state
    useEffect(() => {
        const subscription = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return () => subscription()
    }, [])

    const authInfo = { user, createUser, loading, signIn, logOut, updateUserName, setLoading, googleLogin,githubLogin }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;