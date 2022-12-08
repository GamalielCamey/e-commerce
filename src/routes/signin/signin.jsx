// import {useEffect} from "react";
// import {getRedirectResult} from "firebase/auth";
import {
  // auth,
  signInWithGooglePopup,
  createUserFromAuth,
  // signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/signup-form/signup-form.component";

const SignIn = () => {
  // //! IN CASE WE USE REDIRECT SIGNIN UN COMMENT THE CODE
  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await getRedirectResult(auth);
  //     if (response) {
  //       const userDocRef = await createUserFromAuth(response.user);
  //     }
  //   }
  //   fetchData();
  // }, []);

  //? IN CASE WE USE POPUP SIGNIN (I LIKE THIS ONE BETTER)
  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    createUserFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={logGoogleUser}>Sign in with Google</button>
      <SignUpForm />
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button> */}
    </div>
  );
};
export default SignIn;
