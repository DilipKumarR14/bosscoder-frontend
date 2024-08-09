import React from "react";
import { Link } from "react-router-dom";

const LinkK = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">App</Link>{" "}
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>

        <li>
          <Link to="/navbar">Navbar</Link>
        </li>
      </ul>
    </div>
  );
};

export default LinkK;
