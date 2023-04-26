import CompanyCard from "./CompanyCard";
import {Link} from 'react-router-dom'
import SearchForm from './SearchForm';
/**
 * List of searchable companies
 *
 * Props:
 *
 * State:
 * - companies: [{name, description, logo, companyHandle}]
 *
 * RoutesList -> CompanyList -> {SearchForm, CompanyCard}
 */

function CompanyList() {
  // const [companies, setCompaniesList] = useState();
  console.log("CompanyList is running");

  return (
    <div className="CompanyList">
      <SearchForm />
      <Link to="/companies/company1">
      <CompanyCard
        name="Company1"
        description="I am Company1"
        logo="/logo1.png"
      />
      </Link>
      <Link to="/companies/company2">
      <CompanyCard
        name="Company2"
        description="I am Company2"
        logo="/logo2.png"
      />
      </Link>
      <Link to="/companies/company3">
      <CompanyCard
        name="Company3"
        description="I am Company3"
        logo="/logo3.png"
      />
      </Link>
    </div>
  );
}

export default CompanyList;
