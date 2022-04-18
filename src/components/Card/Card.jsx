import React from "react";
import css from "./Card.module.scss";

function Card(props) {
  return (
    <div className={css.card}>
      <h3 className={css.header}>{props.title}</h3>
      <div className={css.body}>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default Card;
