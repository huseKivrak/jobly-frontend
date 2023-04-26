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
    <nav className=" Nav navbar navbar-expand-lg navbar-light bg-dark text-danger">
      <NavLink to ="/">Jobly</NavLink>
      <NavLink to ="/companies">Companies</NavLink>
      <NavLink to ="/jobs">Jobs</NavLink>
    </nav>
  )
}

export default Nav;