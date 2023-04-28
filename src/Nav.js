import { NavLink } from 'react-router-dom';
import { useContext } from "react";
import userContext from "./userContext";
import React from "react";


/** Nav
 *
 * Displays NavBar at the top of each page, linking to Jobly, Companies, Jobs
 *
 * Props:
 * - none
 *
 * States:
 * - none
 *
 * App -> Nav
 */
function Nav() {
  const { username } = useContext(userContext);
  console.log("Nav is running");

  return (
    <nav className="Nav navbar navbar-light bg-light text-primary justify-content-between">
      {username ?
        <>
          <NavLink className="nav-item" to="/">Jobly</NavLink>
          <NavLink className="nav-item" to="/companies">Companies</NavLink>
          <NavLink className="nav-item" to="/jobs">Jobs</NavLink>
          <NavLink className="nav-item" to="/">Log out {username}</NavLink>
        </>
        :
        <>
          <NavLink className="nav-item" to="/">Jobly</NavLink>
          <NavLink className="nav-item" to="/login">Login</NavLink>
          <NavLink className="nav-item" to="/signup">Sign Up</NavLink>
        </>
      }
    </nav>
  );
}

export default Nav;