import React from "react";

import { HeaderProps } from "./Header.types"

import "./Header.scss";

const Header: React.FC<HeaderProps> = ({ theme }) => (
  <div
    data-testid="header"
    className={`header header-${theme}`}
  >
    <h1 className="heading">I'm the heading component</h1>
    <h2>Made with love by Harvey</h2>
  </div>
);

export default Header;