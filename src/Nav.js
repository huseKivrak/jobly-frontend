import {NavLink} from 'react-router-dom';
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
function Nav (){
  console.log("Nav is running");
  return (
    <nav className="Nav navbar navbar-expand-xl navbar-light bg-light text-primary justify-content-between">
      <NavLink className="nav-item" to ="/">Jobly</NavLink>
      <NavLink className="nav-item" to ="/companies">Companies</NavLink>
      <NavLink className="nav-item" to ="/jobs">Jobs</NavLink>
    </nav>
  )
}

export default Nav;