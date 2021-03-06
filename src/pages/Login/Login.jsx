import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "../../components/UI/Button/Button";
import Container from "../../components/UI/Container";
import { postFecth } from "../../helper/postFecth";
import AuthContext from "../../store/AuthContx";
import css from "./Login.module.scss";

const initErrors = {
  password: "",
  email: "",
};

function Login() { 
  const authCtx = useContext(AuthContext);
  const history = useHistory();
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [isError, setisError] = useState(false);
  const [errorObj, seterrorObj] = useState(initErrors);
  const [noAccount, setNoAccount] = useState("");

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
    const newLoginUser = {
      email: userEmail,
      password: userPassword,
    };
    const sendResult = await postFecth("auth/login", newLoginUser);
    if (sendResult.err) {
      setisError(true);
      setNoAccount(sendResult.err);
    } else {
      history.push("/");
      authCtx.login();
    }
  }

  return (
    <Container>
      <h2>Login</h2>
      <form onSubmit={submitHandler} className={css.form}>
        {isError && <h3 className={css.err}>Check The Form</h3>}
        <input
          onChange={(e) => setUserEmail(e.target.value)}
          value={userEmail}
          className={`${css.input} ${errorObj.userEmail ? css.errBg : ""}`}
          type="email"
          placeholder="email"
        />
        {errorObj.userEmail && (
          <p className={css.errorText}>{errorObj.userEmail}</p>
        )}
        <input
          onChange={(e) => setUserPassword(e.target.value)}
          value={userPassword}
          className={`${css.input} ${errorObj.userPassword ? css.errBg : ""}`}
          type="password"
          placeholder="password"
        />
        {errorObj.userPassword && (
          <p className={css.errorText}>{errorObj.userPassword}</p>
        )}
        <h3>{noAccount}</h3>
        <Button>Login</Button>
      </form>
    </Container>
  );
}

export default Login;
