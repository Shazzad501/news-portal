import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null)
  const [loading, setLoding] = useState(true);
  // create google provider
  const googleProvider = new GoogleAuthProvider()

  // create new use function
  const createNewUser =(email, password)=>{
    setLoding(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  // login user function
  const loginEdgetUser =(email, password)=>{
    setLoding(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  // login with google function
  const loginWithGoogle=()=>{
    setLoding(true);
    return signInWithPopup(auth, googleProvider);
  }

  // update profile function
  const updateUserProfile=(updatedData)=>{
    return updateProfile(auth.currentUser, updatedData)
  }

  // use sign out function 
  const logOutUser=()=>{
    setLoding(true);
    return signOut(auth);
  }

  // context value
  const authInfo ={
    user,
    setUser,
    createNewUser,
    loginEdgetUser,
    loginWithGoogle,
    updateUserProfile,
    logOutUser,
    loading
  }

  // observer handler effent
  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
      setUser(currentUser);
      setLoding(false)
    })
    return()=>{
      unSubscribe();
    }
  }, [])

  return ( 
  <AuthContext.Provider value={authInfo}>
      {children}
  </AuthContext.Provider>
  );
};

export default AuthProvider;