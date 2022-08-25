import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  updateProfile,
  signInWithPopup,
} from "firebase/auth";

const googleProvider = new GoogleAuthProvider();
initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const auth = getAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState("");

  //login user

  const loginUser = (email, password, location, navigate) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || "/";
        navigate(destination);

        // Signed in
        setAuthError("");
        const user = userCredential.user;
        setUser(user);

        // ...
      })
      .catch((error) => {
        setAuthError(error.message);
        setUser({});
      })
      .finally(() => setIsLoading(false));
  };

  //Register
  const registerUser = (email, password, name, location, navigate) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError("");
        const newUser = { email, displayName: name };
        saveUser(email, name, "POST");
        setUser(newUser);

        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});
        const destination = location?.state?.from || "/";
        navigate(destination);
      })
      .catch((error) => {
        setAuthError(error.message);
        setUser({});
      })
      .finally(() => setIsLoading(false));
  };

  const googleSignIn = (location, navigate) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        setAuthError("");
        const user = result.user;
        saveUser(user.email, user.displayName, "PUT");
        const destination = location?.state?.from || "/";
        navigate(destination);
      })
      .catch((error) => {
        // Handle Errors here.
        setAuthError(error.message);
        setUser({});
        // ...
      })
      .finally(() => setIsLoading(false));
  };

  //observer
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        const uid = user.uid;
        // ...
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, []);

  //save user info

  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };
    fetch(`http://localhost:5000/users`, {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };
  // logout
  const logOut = () => {
    setIsLoading(true);
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoading(false));
  };
  return {
    user,
    isLoading,
    authError,
    registerUser,
    loginUser,
    googleSignIn,
    logOut,
  };
};
export default useFirebase;
