import { useState } from "react";
import { useHistory, Link } from "react-router-dom";

const Signin = () => {
  const [errorusername, setErrorUsername] = useState(false);
  const [errorpassword, setErrorPassword] = useState(false);
  const history = useHistory();
  const [isValidUsername, setIsValidUsername] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const validateUsername = (event) => {
    const patternUsername = /^[a-z\d]{5,12}$/i;
    setUsername(event.target.value);
    if (patternUsername.test(username)) {
      setIsValidUsername(true);
    } else {
      setIsValidUsername(false);
      setErrorUsername("Invalid  username");
    }
  };

  const validatePassword = (event) => {
    const patternPassword = /[\w@-]{8,20}$/;
    setPassword(event.target.value);
    if (patternPassword.test(password)) {
      setIsValidPassword(true);
    } else {
      setIsValidPassword(false);
      setErrorPassword("Invalid  password");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isValidUsername && isValidPassword) {
      console.log("valid");
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
          value={username}
          onChange={validateUsername}
          type="text"
        />
        <br />
        <br />
        <input
          name="password"
          placeholder="password"
          value={password}
          onChange={validatePassword}
          type="password"
        />
        <br />
        <br />

        <button className="submit" type="submit">
          Sign in
        </button>

        <br />

        <p>
          Don't have an account?{" "}
          <Link className="Signup" to="/Signup">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signin;
