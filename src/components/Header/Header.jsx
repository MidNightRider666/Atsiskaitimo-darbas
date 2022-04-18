import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import AuthContext from "../../store/AuthContx";
import Button from "../UI/Button/Button";
import Container from "../UI/Container";
import css from "./Header.module.scss";

function Header() {
    const history = useHistory()
  const {isUserLoggedIn, logout} = useContext(AuthContext);

  function logoutHandler(e) {
    logout();
    localStorage.removeItem('token')
    history.push('/')
    history.go(0)
  }
  return (
    <header>
      <Container className={css.header}>
        <h2 className={css.logo}>
          <img className={css.HeaderLogo}
            src="https://thumbs.dreamstime.com/b/skill-logo-concept-design-eps-supported-83707473.jpg"
            alt=""
          />
        </h2>
        <nav>
          {!isUserLoggedIn && (
            <NavLink className={css.navLink} to={"/Register"}>
              Register
            </NavLink>
          )}
          {!isUserLoggedIn && (
            <NavLink className={css.navLink} to={"Login"}>
              Login
            </NavLink>
          )}
          {isUserLoggedIn && (
            <NavLink className={css.navLink} to={"/"}>
              Home
            </NavLink>
          )}
          {isUserLoggedIn && <Button onClick={logoutHandler} AddFocus>Logout</Button>}
        </nav>
      </Container>
      <hr className="horizontal line" />
    </header>
  );
}

export default Header;
