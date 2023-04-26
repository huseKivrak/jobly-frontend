import { useState, useEffect } from "react";
import JobCardList from './JobCardList';
import SearchForm from './SearchForm';
import { getAllJobs, findJobs } from "./api";

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

  console.log("JobList is running");

  useEffect(function initializeJobsOnMount() {
    async function initializeJobs() {
      const allJobs = await getAllJobs();
      setJobs(allJobs);
    }
    initializeJobs();
  }, []);

  async function searchAndSetJobs({ term }) {
    const jobResults = findJobs(term);
    setJobs(jobResults);
  }

  return (
    <div className='JobList'>
      <SearchForm handleSearch={searchAndSetJobs} />
      <JobCardList jobs={jobs}/>
    </div>
  );
}


export default JobList;