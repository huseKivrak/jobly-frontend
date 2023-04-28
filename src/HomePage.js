import { useContext } from 'react';
import { Link } from 'react-router-dom';
import userContext from './userContext';


/** HomePage
 *
 * Landing page for site
 *
 * Props:
 * - none
 *
 * States:
 * - none
 *
 * RoutesList -> HomePage
 */

function HomePage() {
  const { firstName } = useContext(userContext);
  console.log(`HomePage is running`);
  return (
    <div className="HomePage mt-5">
      <h1 className="HomePage-header">Jobly</h1>
      <p>All the jobs in one convenient place.</p>
      {firstName ? (
        <h3>Welcome back, {firstName}!</h3>
      ) : (
        <>
          <Link className="btn btn-primary" to="/login">
            Login
          </Link>
          <Link className="btn btn-primary" to="/signup">
            Sign up
          </Link>
        </>
      )}
    </div>
  );
}

export default HomePage;
