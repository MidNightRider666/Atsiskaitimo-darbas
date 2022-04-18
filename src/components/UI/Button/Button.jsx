import React from "react";
import css from "./Button.module.scss";

function Button(props) {
  const extraBtn = props.Add ? css.Add : props.AddFocus ? css.AddFocus : "";
  return (
    <button onClick={props.onClick} className={`${css.btn} ${extraBtn}`}>
      {props.children}
    </button>
  );
}

export default Button;
