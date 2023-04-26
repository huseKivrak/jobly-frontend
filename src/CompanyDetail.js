import {useParams} from 'react-router-dom';
import JobCardList from './JobCardList';


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

function CompanyDetail (){
  const {handle} = useParams();
  console.log("CompanyDetail is running")

return (
  <div className='CompanyDetail'>
<p>I am the detail page for {handle}</p>
<JobCardList/>
  </div>
)
}


export default CompanyDetail;