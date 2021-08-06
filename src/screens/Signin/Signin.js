import { useState } from "react";
import { useHistory, Link } from "react-router-dom";

import "./Signin.css";

const Signin = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [userisChecked, setUserisChecked] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isValidUsername, setIsValidUsername] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const history = useHistory();

  ////validation
  const validateUsername = (event) => {
    const patternUsername = /^[a-z\d]{5,12}$/i;
    setUsername(event.target.value);
    if (patternUsername.test(event.target.value)) {
      console.log("username:", "usernametrue");
      setIsValidUsername(true);
    } else {
      setIsValidUsername(false);
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
  ////userIschecked
  const validateUser = () => {
    const checkedUser = document.getElementById("user");
    if (checkedUser) {
      setUserisChecked(true);
    }
  };

  //// Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidUsername && isValidPassword && userisChecked) {
      console.log("ValidUsername,ValidPassword");
      history.push("/UploadForm");
    }
  };
  ////
  return (
    <div className="form-signin-input">
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          name="username"
          placeholder="Username"
          value={username}
          className="input-form"
          onChange={validateUsername}
          type="text"
        />

        {!isValidUsername && <p className="error">Your username is invalid</p>}
        <br />
        <br />
        <input
          name="password"
          placeholder="password"
          value={password}
          className="input-form"
          onChange={validatePassword}
          type="password"
        />
        {!isValidPassword && <p className="error">our password is invalid</p>}
        <br />
        <br />

        <button className="Signin" type="submit">
          Sign in
        </button>
        <br />

        <div id="checkBox">
          <div className="user-radio">
            <label htmlFor="role-box"> are you User?</label>
            <input
              type="radio"
              name="role"
              id="user"
              onClick={() => validateUser()}
              onChange={() => setIsChecked(!isChecked)}
            />
          </div>
          <div className="consumer-radio">
            <label htmlFor="role-box"> are you Consumer?</label>
            <input
              type="radio"
              name="role"
              id="consumer"
              onChange={() => setIsChecked(!isChecked)}
            />
          </div>
        </div>
        <br />

        <p className="createaccount">
          Don't have an account? <Link to="/Signup">Sign up</Link>
        </p>
      </form>
    </div>
  );
};

export default Signin;
