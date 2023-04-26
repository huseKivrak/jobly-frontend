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


function JobCard({ title, company, salary, equity }) {
  console.log("JobCard is running")
  return (
    <div className="JobCard">
      <b className="JobCard-title">{title}</b>
      <p>{company}</p>
      <p>Salary: {salary}</p>
      <p>Equity: {equity}</p>
    </div>
  );
}


export default JobCard;