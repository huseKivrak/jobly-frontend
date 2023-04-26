/** JobCard
 *
 * Display element for a single job
 *
 *
 * Props:
 *  -id, title, companyName, salary, equity
 *
 * States:
 * - none
 *
 * JobCardList > JobCard
 */


function JobCard({ title, companyName = "", salary, equity }) {
  console.log("JobCard is running");
  return (
    <div className="JobCard card">
      <div className="card-body">
        <b className="card-title">{title}</b>
        {companyName && <p className="card-text">{companyName}</p>}
        <p className="card-text mb-0">Salary: {salary}</p>
        <p className="card-text">Equity: {equity}</p>
      </div>
    </div>
  );
}


export default JobCard;