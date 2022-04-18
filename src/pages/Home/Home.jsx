import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CardList from "../../components/CardList/CardList";
import Button from "../../components/UI/Button/Button";
import Container from "../../components/UI/Container";
import Loading from "../../components/UI/Loading";
import { getFetch } from "../../helper/getFect";
import css from "./Home.module.scss";

function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [skillArr, setSkillArr] = useState([]);
  const [errorFromBE, setErrorFromBE] = useState("");

  useEffect(() => {
    getSkills();
  }, []);

  async function getSkills() {
    setIsLoading(true);
    const skillFromDB = await getFetch("content/skills");
    const FailedToken = skillFromDB.err;
    setSkillArr(skillFromDB);
    setErrorFromBE(FailedToken);
    setIsLoading(false);
  }

  window.addEventListener("beforeunload", () =>
    localStorage.removeItem("token")
  );

  if (errorFromBE === "Invalid Token") {
    return (
      <Container>
        <div className={css.flex}>
          <h1 className={css.noToken}>
            Skills are only for registered users. If you have an account please
            log in
          </h1>
        </div>
        <h1>
          <img
            className={css.TokenLogo}
            src="https://www.logolynx.com/images/logolynx/35/351d1bcd0ac14fd8f1e9ebe2d181ad66.jpeg"
            alt=""
          />
        </h1>
      </Container>
    );
  }

  if (isLoading) {
    return (
      <div className={css.loading}>
        <Loading />
      </div>
    );
  }

  if (skillArr.length <= 0 && !isLoading) {
    return (
      <Container>
        <h1>Skills are empty, please add some</h1>
        <Link to={"/Add"}>
          <Button Add>Add skills</Button>
        </Link>
      </Container>
    );
  } else {
    return (
      <Container>
        <div className={css.flex}>
          <h1>Skills List</h1>
          <Link to={"/Add"}>
            <Button Add>Add skills</Button>
          </Link>
        </div>
        <CardList item={skillArr} />
      </Container>
    );
  }
}

export default Home;
