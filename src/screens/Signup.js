import { useState } from "react";
import { useHistory } from "react-router-dom";

const Signup = () => {
  const history = useHistory();
  const [errors, setErrors] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // const [isValidFirstName, setIsValidFirstName] = useState(false);
  // const [isValidLastName, setIsValidLastName] = useState(false);
  // const [isValidEmail, setIsValidEmail] = useState(false);
  // const [isValidPassword, setIsValidPassword] = useState(false);
  // const [isValidConfirmPassword, setIsValidConfirmPassword] = useState(false);
  const handleChange = (event) => {
    event.preventDefault();
    const email = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
    const { name, value } = event.target;

    switch (name) {
      case "firstName":
        errors.firstName =
          value.length < 5 ? "First Name must be more 5 characters long!" : "";
        break;
      case "lastName":
        errors.lastName =
          value.length < 5 ? "Last Name must be more 5 characters long!" : "";
        break;
      case " email":
        errors.email = email.test(value) ? "Email is not valid!" : "";
        break;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/");
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
          onChange={(e) => setFirstName(e.target.value)}
          type="text"
        />
        <br />
        <br />
        <input
          name="lastName"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          type="text"
        />
        <br />
        <br />
        <input
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
        <br />
        <br />
        <input
          name="Password"
          placeholder="Password"
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
        <br />
        <br />
        <input
          name="confirmPassword"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          type="password"
        />
        <br />
        <br />

        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default Signup;
