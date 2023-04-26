/**
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
  console.log('HomePage is running');

  return (
    <div className="HomePage mt-5">
      <h1 className="HomePage-header">Jobly</h1>
      <p>All the jobs in one convenient place.</p>
    </div>
  );
}


export default HomePage;