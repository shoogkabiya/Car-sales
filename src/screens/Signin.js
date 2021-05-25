import { useState } from "react";
import { useHistory, Link } from "react-router-dom";

const Signin = () => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isValidUsername, setIsValidUsername] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [message, setMessage] = useState("");

  const validateUsername = (event) => {
    const patternUsername = /^[a-z\d]{5,12}$/i;
    setUsername(event.target.value);
    if (patternUsername.test(username)) {
      setIsValidUsername(true);
      setMessage("Your username looks good!");
    } else {
      setIsValidUsername(false);
      setMessage("Please enter a  valid username");
    }
  };

  const validatePassword = (event) => {
    const patternPassword = /[\w@-]{8,20}$/;
    setPassword(event.target.value);
    if (patternPassword.test(password)) {
      setIsValidPassword(true);
      setMessage("Your password looks good!");
    } else {
      setIsValidPassword(false);
      setMessage("Please enter a  valid password");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidUsername && isValidPassword) {
      history.push("/HomePage");
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
          name="username"
          placeholder="Username"
          onChange={validateUsername}
          type="text"
        />
        <br />
        <br />
        <input
          name="password"
          placeholder="password"
          onChange={validatePassword}
          type="password"
        />
        <br />
        <br />
        <div
          className={`message ${
            isValidUsername || isValidPassword ? "success" : "error"
          }`}
        >
          {message}
        </div>
        <button type="submit">Sign in</button>
        <br />

        <p>
          Don't have an account? <Link to="/Signup">Sign up</Link>
        </p>
      </form>
    </div>
  );
};

export default Signin;
