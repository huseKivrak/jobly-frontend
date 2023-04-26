import { useState } from "react";
import CompanyCard from "./CompanyCard";
import SearchForm from './SearchForm';
import { findCompanies } from "./api.js";

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

  async function searchAndSetCompanies({ term }) {
    const companyResults = await findCompanies(term);
    setCompanies(companyResults);
  }

  return (
    <div className="CompanyList">
      <SearchForm handleSearch={searchAndSetCompanies}/>
      {companies.map(c => (
        <CompanyCard
        handle={c.handle}
        name={c.name}
        description={c.description}
        logoUrl={c.logoUrl}
        />
      ))}
    </div>
  );
}

export default CompanyList;
