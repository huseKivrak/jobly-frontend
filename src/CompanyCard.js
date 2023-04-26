import { Link } from "react-router-dom";

/** CompanyCard
 *
 * Display element for a single company
 *
 *
 * Props:
 *  - name
 *  - description
 *  - logo
 *  - companyHandle
 *
 *
 * States:
 * - none
 *
 *
 * CompanyList > CompanyCard
 */
function CompanyCard({ name, description, logo, companyHandle }) {
  console.log("CompanyCard is running");
  return (
    <Link to={`/companies/${companyHandle}`}>
      <div className='CompanyCard'>
        <h1 className='CompanyCard-header font-size-4'>{name}</h1>
        <p>{description}</p>
        <img src={logo} alt="logo" />
      </div>
    </Link>
  );
}

export default CompanyCard;