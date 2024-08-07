import { createContext, useState } from "react";
import{ createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";

let auth=getAuth(app)

export let AuthContext= createContext(null)

const AuthProviders = ({children}) => {
    let [user,setUser]=useState(null)
    let [loading, setLoading]=useState(true)

    let createUser=(email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email, password)
    }

    let userInfo={
        user,
        loading, 
        createUser
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;