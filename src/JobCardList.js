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


const testJobs = [
  {
    id: 1,
    companyName: "Company1",
    title: "Employee",
    equity: .95,
    salary: 1000
  },
  {
    id: 2,
    companyName: "Company2",
    title: "Owner",
    equity: .66,
    salary: 10
  },
  {
    id: 3,
    companyName: "Company3",
    title: "Quality Assurance",
    equity: .15,
    salary: 1
  }
];

function JobCardList({ jobs=testJobs }) {
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