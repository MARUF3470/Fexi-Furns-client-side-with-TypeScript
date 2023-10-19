import React, { useEffect, useState, ReactNode } from "react";
import { createContext } from "react";
import { app } from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
export const AuthContext = createContext({});
const auth = getAuth(app);
interface AuthProviderProps {
  children: ReactNode;
}
const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const registration = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const login = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const updateUser = (profile: { displayName: string; photoURL: string }) => {
    if (auth.currentUser) {
      return updateProfile(auth.currentUser, profile);
    }
  };
  const logout = () => {
    setUser({});
    return signOut(auth);
  };
  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      }
      setLoading(false);
    });
    return () => unsubcribe();
  }, []);
  const authInfo = {
    registration,
    login,
    updateUser,
    logout,
    user,
    loading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
