/** JobCard
 *
 * Display element for a single job
 *
 *
 * Props:
 *  -title, company, salary, equity
 *
 * JobCardList > JobCard
 */
function JobCard({ title, company, salary, equity }) {

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