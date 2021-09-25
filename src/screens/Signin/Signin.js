import { useState } from "react";
import { useHistory, Link } from "react-router-dom";

import "./Signin.css";

const Signin = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [userisChecked, setUserisChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const history = useHistory();

  ////validation
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
  ////userIschecked
  const validateUser = () => {
    const checkedUser = document.getElementById("user");
    console.log("checkedUser:", checkedUser);
    if (checkedUser) {
      setUserisChecked(true);
    }
  };

  //// Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    var pathurl;
    if (isValidEmail && isValidPassword && userisChecked) {
      console.log("ValidEmail,ValidPassword");
      pathurl = "http://localhost:4000/user/signin";
    }

    fetch(pathurl, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((response) => {
        console.log("response:", response);
        return response.json();
      })
      .then((object) => {
        console.log(object);
        if (object.access_token) {
          window.location.pathname = "/UploadForm";
        } else {
          return object;
        }
      })
      .catch((error) => {
        console.log(error);
      });
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
          name="email"
          placeholder="Email"
          value={email}
          className="input-form"
          onChange={validateEmail}
          type="email"
        />

        {!isValidEmail && <p className="error">Your username is invalid</p>}
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
