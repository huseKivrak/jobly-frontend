import { useState, useEffect } from "react";
import JobCardList from './JobCardList';
import SearchForm from './SearchForm';
import JoblyApi from "./api";

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
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  console.log("JobList is running");

  useEffect(function initializeJobsOnMount() {
    async function initializeJobs() {
      const allJobs = await JoblyApi.getAllJobs();
      setJobs(allJobs);
      setIsLoading(false);
    }
    initializeJobs();
  }, []);

  async function searchAndSetJobs({ term }) {
    const jobResults = await JoblyApi.findJobs(term);
    setJobs(jobResults);
  }

  if(isLoading) return <p>Loading...</p>


  return (
    <div className='JobList'>
      <SearchForm handleSearch={searchAndSetJobs} />
      <JobCardList jobs={jobs}/>
    </div>
  );
}


export default JobList;