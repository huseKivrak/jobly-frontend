import { useState, useEffect } from "react";
import CompanyCard from "./CompanyCard";
import SearchForm from './SearchForm';
import JoblyApi from "./api";

/**
 * List of searchable companies
 *
 * Props:
 *
 * State:
 * - companies: [{handle, name, description, numEmployees, logoUrl}]
 *
 * RoutesList -> CompanyList -> {SearchForm, CompanyCard}
 */

function CompanyList() {
  const [companies, setCompanies] = useState([]);

  console.log("CompanyList is running");

  useEffect(function initializeCompaniesOnMount() {
    async function initializeCompanies() {
      const allCompanies = await JoblyApi.getCompanies();
      setCompanies(allCompanies);
    }
    initializeCompanies();
  }, []);

  async function searchAndSetCompanies({ term }) {
    const companyResults = await JoblyApi.findCompanies(term);
    setCompanies(companyResults);
  }

  return (
    <div className="CompanyList">
      <SearchForm handleSearch={searchAndSetCompanies} />
      {companies.map(c => (
        <CompanyCard
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
