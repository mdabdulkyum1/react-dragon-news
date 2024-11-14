import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from './../firebase/firebase.init';

export const AuthContext = createContext(null) 

function AuthProvider(props = {}) {
  const {children} = props || {};
// state manege here
const [currentUser, setCurrentUser] = useState(null);


const createUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
}

useEffect(()=> {
  const unSubscribe =onAuthStateChanged(auth, (user) => {
    if(user){
      setCurrentUser(user);
    }
  })

  return ()=> unSubscribe();

} ,[])









  const authInfo = {
    currentUser,
    setCurrentUser,
    createUser
  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider