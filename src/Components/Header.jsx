import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <nav>
      <h1>Writing Studds</h1>
      <main>
        <HashLink to={"/#home"}>Home</HashLink>
        <Link to={"/contact"}>Connect</Link>
        <HashLink to={"/#about"}>About</HashLink>
        <HashLink to={"/#collaboration"}>Collaboration</HashLink>
        <Link to={"/service"}>Service</Link>
      </main>
    </nav>
  );
};
export default Header;