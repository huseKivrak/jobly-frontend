import { useState, useEffect } from "react";
import CompanyCard from "./CompanyCard";
import SearchForm from './SearchForm';
import JoblyApi from "./api";

/**
 * List of searchable companies
 *
 * Props:
 *
 * State:  TODO: add other state
 * - companies: [{handle, name, description, numEmployees, logoUrl}]
 *
 * RoutesList -> CompanyList -> {SearchForm, CompanyCard}
 */

function CompanyList() {
  const [companies, setCompanies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  console.log("CompanyList is running");

  useEffect(function initializeCompaniesOnMount() {
    async function initializeCompanies() {
      const allCompanies = await JoblyApi.getCompanies();
      setCompanies(allCompanies);
      setIsLoading(false);
    }
    initializeCompanies();
  }, []);

  //TODO: docstring
  async function searchAndSetCompanies({ term }) {
    const companyResults = await JoblyApi.findCompanies(term);
    setCompanies(companyResults);
  }

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="CompanyList">
      <SearchForm handleSearch={searchAndSetCompanies} />
      {companies.map(c => (
        <CompanyCard  //TODO: set key
          handle={c.handle}
          name={c.name}
          description={c.description}
          logoUrl={c.logoUrl}
        />
      ))}
      {companies.length === 0 && <p>No companies found</p>}
    </div>
  );
}

export default CompanyList;
