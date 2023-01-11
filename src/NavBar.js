import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav>
      <div className="nav-wrapper blue-grey">
        <a href="#" className="brand-logo center">
          Product Store 
        </a>
        <ul class="left hide-on-med-and-down">
          <li>
            <Link to="/">Products</Link>
          </li>
          <li>
            <Link to="About">Product</Link>
          </li>
          <li>
            <Link to="Search">Search</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;
