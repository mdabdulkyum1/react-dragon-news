import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from './../firebase/firebase.init';

export const AuthContext = createContext(null) 

function AuthProvider(props = {}) {
  const {children} = props || {};
// state manege here
const [currentUser, setCurrentUser] = useState(null);
const [loading, setLoading] = useState(true);


const createUser = (email, password) => {
  setLoading(true)
  return createUserWithEmailAndPassword(auth, email, password);
}

const signInUser = (email, password) => {
  setLoading(true)
  return signInWithEmailAndPassword(auth, email, password);
}

const logOut = () => {
  signOut(auth).then(() => {
    setCurrentUser(null)
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
    console.log("ERROR", error.massage);
  });
}

useEffect(()=> {
  const unSubscribe =onAuthStateChanged(auth, (user) => {
    if(user){
      setLoading(false)
      setCurrentUser(user);
    }
  })

  return ()=> unSubscribe();

} ,[])









  const authInfo = {
    currentUser,
    setCurrentUser,
    createUser,
    signInUser,
    logOut,
    loading,
    setLoading
  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider