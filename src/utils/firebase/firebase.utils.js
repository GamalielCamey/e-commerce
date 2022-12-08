import {initializeApp} from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import {getFirestore, doc, getDoc, setDoc} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDhJUut_T0_7OZ5vjdwQS_KzQqhd4Mxe80",
  authDomain: "crwn-db-1f235.firebaseapp.com",
  projectId: "crwn-db-1f235",
  storageBucket: "crwn-db-1f235.appspot.com",
  messagingSenderId: "987751716039",
  appId: "1:987751716039:web:e101132a12579cd1245ae2",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
// export cons signInWithGoogleRedirect = () => signInWithRedirect()

export const db = getFirestore();

export const createUserFromAuth = async (UserAuth) => {
  const userDocRef = doc(db, "users", UserAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const {displayName, email} = UserAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {displayName, email, createdAt});
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }
  return userDocRef;
};
