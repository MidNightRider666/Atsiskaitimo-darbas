import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Button from "../../components/UI/Button/Button";
import Container from "../../components/UI/Container";
import { postFecth } from "../../helper/postFecth";
import css from "./Register.module.scss";

const initErrors = {
  password: "",
  email: "",
};

function Register() {
  const history = useHistory();
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [isError, setisError] = useState(false);
  const [errorObj, seterrorObj] = useState(initErrors);

  useEffect(() => {
    const isErrorsEmpty = Object.values(errorObj).every((el) => el === "");
    if (!isErrorsEmpty) {
      setisError(true);
    }
  }, [userEmail, userPassword, errorObj]);

  async function submitHandler(e) {
    setisError(false);
    seterrorObj(initErrors);
    e.preventDefault();

    if (userEmail.trim() === "") {
      seterrorObj((prevState) => ({
        ...prevState,
        userEmail: "Email can't be blank",
      }));
    }
    if (userPassword.trim() === "") {
      seterrorObj((prevState) => ({
        ...prevState,
        userPassword: "Password can't be blank",
      }));
    }
    const newUserRegister = {
      email: userEmail,
      password: userPassword,
    };
    const sendResult = await postFecth("auth/register", newUserRegister);
    if (sendResult.changes === 1) {
      history.push("/Login");
    }
    if (sendResult.err) {
      setisError(true);
    }
  }

  return (
    <Container>
      <h2>Register</h2>
      <form onSubmit={submitHandler} className={css.form}>
        {isError && <h3 className={css.err}>Check The Form</h3>}
        <input
          onChange={(e) => setUserEmail(e.target.value)}
          value={userEmail}
          className={`${css.input} ${errorObj.userEmail ? css.errBg : ""}`}
          type="email"
          placeholder="email"
        />
        {errorObj.userEmail && <p>{errorObj.userEmail}</p>}
        <input
          onChange={(e) => setUserPassword(e.target.value)}
          value={userPassword}
          className={`${css.input} ${errorObj.userPassword ? css.errBg : ""}`}
          type="password"
          placeholder="password"
        />
        {errorObj.userPassword && <p>{errorObj.userPassword}</p>}
        <Button>Register</Button>
      </form>
    </Container>
  );
}

export default Register;
