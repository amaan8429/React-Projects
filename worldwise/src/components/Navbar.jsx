// import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to={"/"}>Homepage</NavLink>
          <NavLink to={"/product"}>Product</NavLink>
          <NavLink to={"/pricing"}>Pricing</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
