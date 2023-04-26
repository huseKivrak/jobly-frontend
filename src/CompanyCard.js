import { Link } from "react-router-dom";

/** CompanyCard
 *
 * Display element for a single company
 *
 *
 * Props:
 *  - handle
 *  - name
 *  - description
 *  - logoUrl
 *
 *
 * States:
 * - none
 *
 *
 * CompanyList > CompanyCard
 */
function CompanyCard({ handle, name, description, logoUrl }) {
  console.log("CompanyCard is running");
  return (
    <Link to={`/companies/${handle}`}>
      <div className='CompanyCard'>
        <h1 className='CompanyCard-header font-size-4'>{name}</h1>
        <p>{description}</p>
        <img src={logoUrl} alt="logo" />
      </div>
    </Link>
  );
}

export default CompanyCard;