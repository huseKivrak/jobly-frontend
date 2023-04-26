/** JobCard
 *
 * Display element for a single job
 *
 *
 * Props:
 *  -id, title, company, salary, equity
 *
 * States:
 * - none
 *
 * JobCardList > JobCard
 */


function JobCard({ title, companyName= "", salary, equity }) {
  console.log("JobCard is running")
  return (
    <div className="JobCard">
      <b className="JobCard-title">{title}</b>
      {companyName && <p>{companyName}</p>}
      <p>Salary: {salary}</p>
      <p>Equity: {equity}</p>
    </div>
  );
}


export default JobCard;