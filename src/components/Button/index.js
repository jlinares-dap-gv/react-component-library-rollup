import React from "react";

import "./styles.scss";

const Button = ({ theme }) => (
  <button
    data-testid="btn"
    className={`btn btn-${theme}`}
  >
    Hi! im a Button
  </button>
);

export default Button;