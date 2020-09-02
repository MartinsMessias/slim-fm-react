import React from "react";

//Styles
import "./styles.css";

interface ButtonProps {
  title?: string;
  link?: string;
}

const ButtonPrimary: React.FC<ButtonProps> = (props) => {
  return (
    <a href={props.link} className="button-primary">
      <span className="button-primary-text">{props.title}</span>
      <span className="button-primary-child">{props.children}</span>
    </a>
  );
};

export default ButtonPrimary;
