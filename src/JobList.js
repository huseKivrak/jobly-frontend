import JobCardList from './JobCardList';
import SearchForm from './SearchForm';

/**
 * List of searchable jobs
 *
 * Props:
 * - none
 *
 * State:
 * - jobs: [{title, salary, equity, company_handle}]
 *
 * RoutesList -> JobList -> {SearchForm, JobCardList}
 */


function JobList() {
  console.log("JobList is running");

  return(
    <div className='JobList'>
      <SearchForm />
      <JobCardList />
    </div>
  )
}


export default JobList;