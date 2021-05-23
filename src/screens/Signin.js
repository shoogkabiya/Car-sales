import { useState } from "react";
import { Link } from "react-router-dom";
import HomePage from "./HomePage";
const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
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
          onChange={(e) => setUsername(e.target.value)}
          type="text"
        />
        <br />
        <br />
        <input
          name="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
        <br />
        <br />
        <button type="submit">Sign in</button>
        <Link to="/HomePage">Sign in</Link>
      </form>
    </div>
  );
};

export default Signin;
