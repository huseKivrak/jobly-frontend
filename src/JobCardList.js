import JobCard from "./JobCard";

/** JobCardList
 *
 * Display list of JobCard elements
 *
 * Props:
 * - jobs: [{id, title, salary, equity, companyName}, ...]
 *
 * States:
 * - none
 *
 * [CompanyDetail, JobList] -> JobCardList -> JobCard
 */


function JobCardList({ jobs }) {
  console.log("JobCardList is running", jobs)
  return (
    <div className="JobCardList">
      <ul>
        {jobs.map(j => (
          <li key={j.id}>
            <JobCard
              title={j.title}
              companyName={j.companyName}
              salary={j.salary}
              equity={j.equity}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}


export default JobCardList;