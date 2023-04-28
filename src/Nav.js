import { NavLink } from 'react-router-dom';
import { useContext } from "react";
import userContext from "./userContext";
import React from "react";


/** Nav
 *
 * Displays NavBar at the top of each page, linking to Jobly, Companies, Jobs
 *
 * Props:
 * - logoutUser() (App -> RoutesList -> Nav)
 *
 * States:
 * - none
 *
 * Context Used:
 * - username
 *
 * App -> Nav
 */
function Nav({ logoutUser }) {
  const { username } = useContext(userContext);
  console.log("Nav is running");

  // can move navigate to root to logoutUser if App wrapped in BrowserRouter
  return (
    <nav className="Nav navbar navbar-light bg-light text-primary justify-content-between">
      {username ?
        <>
          <NavLink className="nav-item" to="/">Jobly</NavLink>
          <NavLink className="nav-item" to="/companies">Companies</NavLink>
          <NavLink className="nav-item" to="/jobs">Jobs</NavLink>
          <NavLink className="nav-item" to="/" onClick={logoutUser}>
            Log out {username}
          </NavLink>
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