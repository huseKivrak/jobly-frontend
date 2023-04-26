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
      <div className='CompanyCard card'>
        <div className="card-body">
          <b className='card-title'>{name}</b>
          <p className="card-text">{description}</p>
          {logoUrl && <img src={logoUrl} alt="logo" />}
        </div>
      </div>
    </Link>
  );
}

export default CompanyCard;