import JobCard from "./JobCard";

/**
 * Display list of JobCard elements
 *
 * Props:
 * - jobs: [{id, title, salary, equity, companyName}, ...]
 *
 * {CompanyDetail, JobList} -> JobCardList -> JobCard
 */

function JobCardList({ jobs }) {

  return (
    <div className="JobCardList">
      <ul>
        {jobs.map(j => (
          <li key={j.id}>
            <JobCard
              title={j.title}
              company={j.companyName}
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