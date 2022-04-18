import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Button from "../../components/UI/Button/Button";
import Container from "../../components/UI/Container";
import { postFecth } from "../../helper/postFecth";
import css from "./Add.module.scss";

const initErrors = {
  password: "",
  email: "",
};

function Add() {
  const history = useHistory();
  const [skillsTitle, setSkillsTitle] = useState("");
  const [skillsDescription, setSkillsDescription] = useState("");
  const [isError, setisError] = useState(false);
  const [errorObj, seterrorObj] = useState(initErrors);

  useEffect(() => {
    const isErrorsEmpty = Object.values(errorObj).every((el) => el === "");
    if (!isErrorsEmpty) {
      setisError(true);
    }
  }, [skillsTitle, skillsDescription, errorObj]);

  async function submitHandler(e) {
    setisError(false);
    seterrorObj(initErrors);
    e.preventDefault();
    if (skillsTitle.trim() === "") {
      seterrorObj((prevState) => ({
        ...prevState,
        skillsTitle: "Title can't be blank",
      }));
    }
    if (skillsDescription.trim() === "") {
      seterrorObj((prevState) => ({
        ...prevState,
        skillsDescription: "Description can't be blank",
      }));
    }
    const newSkills = {
      title: skillsTitle,
      description: skillsDescription,
    };
    const sendResult = await postFecth("content/skills", newSkills);
    if (sendResult.err) {
      setisError(true);
    } else {
      history.push("/");
    }
  }

  return (
    <Container>
      <h2>Add Skills</h2>
      <form onSubmit={submitHandler} className={css.form}>
        {isError && <h3 className={css.err}>Check The Form</h3>}
        <input
          onChange={(e) => setSkillsTitle(e.target.value)}
          value={skillsTitle}
          className={`${css.input} ${errorObj.skillsTitle ? css.errBg : ""}`}
          type="text"
          placeholder="Title"
        />
        {errorObj.skillsTitle && <p>{errorObj.skillsTitle}</p>}
        <textarea
          onChange={(e) => setSkillsDescription(e.target.value)}
          value={skillsDescription}
          className={`${css.input} ${
            errorObj.skillsDescription ? css.errBg : ""
          }`}
          type="textarea"
          placeholder="description"
        />
        {errorObj.skillsDescription && <p>{errorObj.skillsDescription}</p>}
        <Button Add>Add</Button>
      </form>
    </Container>
  );
}

export default Add;
