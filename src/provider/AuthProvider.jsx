import { useEffect, useState } from "react";
import { createContext } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../confige/firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();
 
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleProvider = new GoogleAuthProvider();
  const googleSigninPopUp = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const profileUpdate = (name, display_url) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: display_url,
    });
  };

  const logOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        const userInfo = { email: currentUser.email };
        axiosPublic.post("/jwt", userInfo).then((res) => {
          if (res.data.token) {
            localStorage.setItem("access-token", res.data.token);
            setLoading(false);
          }
        });
      }else{
        localStorage.removeItem("access-token")
        setLoading(false)
      }
   
    });
    return () => {
      return unSubscribe();
    };
  }, [axiosPublic]);

  const userIfo = {
    user,
    loading,
    createUser,
    signInUser,
    googleSigninPopUp,
    logOutUser,
    profileUpdate,
  };
  return (
    <AuthContext.Provider value={userIfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
