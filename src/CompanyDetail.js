import { useParams, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import JobCardList from "./JobCardList";
import JoblyApi from "./api";

/** CompanyDetail
 *
 * findJobsByCompany(): gets company data for '/:handle` using JoblyApi
 *
 * Props:
 * - none
 *
 *
 * States:
 * - isLoading: boolean
 * - company : JoblyAPI return, {name, description, jobs, ...}
 * - error : boolean
 *
 * App > CompanyDetail > JobCardList
 */

function CompanyDetail() {
  const [isLoading, setIsLoading] = useState(true);
  const [company, setCompany] = useState(null);
  const [error, setError] = useState(false);
  const { handle } = useParams();
  console.log("CompanyDetail is running");

  useEffect(
    function initializeCompanyJobsOnMount() {
      async function initializeCompanyJobs() {
        let companyData;
        try {
          companyData = await JoblyApi.getCompany(handle);
          setCompany(companyData);
        } catch (err) {
          setError(err);
        }

        setIsLoading(false);
      }
      initializeCompanyJobs();
    },
    [handle]
  );

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="CompanyRetail">
      {company && (
        <div className="CompanyDetail">
          <h1 className="CompanyDetail-header">{company.name}</h1>
          <p className="CompanyDetail-description">{company.description}</p>
          <JobCardList jobs={company.jobs} />
        </div>
      )}
      {error && <p>{`${error}`}</p>}
    </div>
  );
}

export default CompanyDetail;
