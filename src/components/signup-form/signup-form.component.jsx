import {useState} from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserFromAuth,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../input/form-input.component";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {displayName, email, password, confirmPassword} = formFields;

  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormFields({...formFields, [name]: value});
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("password do not match");
      return;
    }
    try {
      const {user} = await createAuthUserWithEmailAndPassword(email, password);
      await createUserFromAuth(user, {displayName});
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("User already exists");
      } else if (error.code === "auth/weak-password") {
        alert("Password must contain at least 6 characters");
      } else {
        console.log("Error on Sign In", error.message);
      }
    }
  };

  return (
    <div>
      <h1>Sign In with your email & password</h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="User Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />
        <FormInput
          label="Email"
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
          required
        />
        <FormInput
          label="Password"
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
          required
        />
        <FormInput
          label="Confirm Password"
          type="password"
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
          required
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignUpForm;
