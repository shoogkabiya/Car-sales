import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Signup = () => {
  const history = useHistory();
  // const [errors, setErrors] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isValidFirstName, setIsValidFirstName] = useState(false);
  const [isValidLastName, setIsValidLastName] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [isValidConfirmPassword, setIsValidConfirmPassword] = useState(false);

  ////validation
  const validateFirstName = (event) => {
    const patternname = /^[a-z\d]{5,12}$/i;
    setFirstName(event.target.value);
    if (patternname.test(event.target.value)) {
      console.log("FirstName:", "FirstNametrue");
      setIsValidFirstName(true);
    } else {
      setIsValidFirstName(false);
    }
  };
  ////
  const validateLastName = (event) => {
    const patternname = /^[a-z\d]{5,12}$/i;
    setLastName(event.target.value);
    if (patternname.test(event.target.value)) {
      console.log("LastName:", "LastNametrue");
      setIsValidLastName(true);
    } else {
      setIsValidLastName(false);
    }
  };
  ////
  const validateEmail = (event) => {
    const email = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
    setEmail(event.target.value);
    if (email.test(event.target.value)) {
      console.log("Email:", "Emailtrue");
      setIsValidEmail(true);
    } else {
      setIsValidEmail(false);
    }
  };
  ////
  const validatePassword = (event) => {
    const patternPassword = /[\w@-]{8,20}$/;
    setPassword(event.target.value);
    if (patternPassword.test(event.target.value)) {
      console.log("password:", "passwordtrue");
      setIsValidPassword(true);
    } else {
      setIsValidPassword(false);
    }
  };
  ////
  const validateconfirmPassword = (event) => {
    const password = setPassword(event.target.value);
    const confirmPassword = setConfirmPassword(event.target.value);
    if (password === confirmPassword) {
      setIsValidConfirmPassword(true);
    } else {
      setIsValidConfirmPassword(false);
    }
  };
  //// Submit

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      isValidFirstName &&
      isValidLastName &&
      isValidEmail &&
      isValidPassword &&
      isValidConfirmPassword
    ) {
      console.log("Correct data");
      history.push("/");
    }
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          name="firstName"
          placeholder="First Name"
          value={firstName}
          onChange={validateFirstName}
          type="text"
        />
        <br />
        <br />
        <input
          name="lastName"
          placeholder="Last Name"
          value={lastName}
          onChange={validateLastName}
          type="text"
        />
        <br />
        <br />
        <input
          name="email"
          placeholder="Email"
          value={email}
          onChange={validateEmail}
          type="email"
        />
        <br />
        <br />
        <input
          name="Password"
          placeholder="Password"
          value={password}
          onChange={validatePassword}
          type="password"
        />
        <br />
        <br />
        <input
          name="confirmPassword"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={validateconfirmPassword}
          type="password"
        />
        <br />
        <br />
        {isValidConfirmPassword ? "equal Password  " : "not equal"}
        <br />
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default Signup;
