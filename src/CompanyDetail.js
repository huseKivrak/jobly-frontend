import { useParams } from "react-router-dom";
import {useEffect, useState} from 'react';
import JobCardList from "./JobCardList";
import JoblyApi from './api';
/** CompanyDetail
 *
 * findJobsByCompany(): gets company data for '/:handle` using JoblyApi
 *
 * Props:
 * - none
 *
 * States:
 * - none
 *
 *
 * App > CompanyDetail > JobCardList
 */

function CompanyDetail() {
  const [company, setCompany] = useState({name: "", description: "", jobs:[]});
  const { handle } = useParams();


  console.log("CompanyDetail is running");

  useEffect(function initializeCompanyJobsOnMount() {
    async function initializeCompanyJobs() {
      let resp = await JoblyApi.getCompany(handle);
      console.log("resp:" , resp);
      setCompany({
        name: resp.name,
        description: resp.description,
        jobs: resp.jobs
      })
    }
    initializeCompanyJobs();
  }, []);

  return (
    <div className="CompanyDetail">
      <h1 className="CompanyDetail-header">{company.name}</h1>
      <p className="CompanyDetail-description">{company.description}</p>
      <JobCardList jobs={company.jobs} />
    </div>
  );
}

export default CompanyDetail;
