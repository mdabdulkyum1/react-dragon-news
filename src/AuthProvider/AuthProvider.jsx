import { createContext } from "react";

export const AuthContext = createContext(null) 

function AuthProvider(props = {}) {
  const {children} = props || {};



  const authInfo = {
    name: "Md Abdul Kyum"
  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider