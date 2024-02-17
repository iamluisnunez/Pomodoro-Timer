import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isTimer, setIsTimer] = useState(true);

  const handleTitleClick = () => {
    setIsTimer(!isTimer);
  };

  return (
    <nav id="desktop-nav">
      <div>
        <ul className="nav-links">
          <li>
            {/* <Link to={isTimer ? "/" : "/test"} onClick={handleTitleClick}>
              <h2 className="title" onClick={handleTitleClick}>
                {isTimer ? "Pomodoro Timer" : "Test"}
              </h2>
            </Link> */}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
