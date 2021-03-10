import React from "react";

import "./Button.scss";

export interface ButtonProps {
  theme: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({ theme }) => (
  <button
    data-testid="btn"
    className={`btn btn-${theme}`}
  >
    Hi! im a Button
  </button>
);

export default Button;