// import { Container } from "react-bootstrap";
import Icon from "../Icon";



const TrackerBenefits: React.FC = () =>{
  return(

    <div className=" d-flex flex-wrap container-sm p-0">
      <div className="card-border-0" >
      <h1>WaterСonsumptionTracker</h1>
      <h2>Record daily water intake and track</h2>
      <h3 className='mb-2,5'>TrackerBenefitsList</h3>
          <ul className="p-0">
            <li className="d-flex align-items-center mb-3">
              <Icon iconId="icon-calendar-days" width={32} height={32} color="inherit" />
            <h3 className="ms-2 mb-0">Track your habits</h3>
            </li>
            <li className="d-flex align-items-center mb-3"><Icon iconId="icon-presentation-chart-bar" width={32} height={32} /><h3 className="ms-2 mb-0">View statistics</h3></li>
            <li className="d-flex align-items-center"><Icon iconId="icon-eye-slash" width={32} height={32} /><h3 className="ms-2 mb-0">Personal rate setting</h3></li>
          </ul>
      </div>
      <button type="button" className="btn btn-primary btn-lg w-100">Try tracker</button>
    </div>
  )
}
export default TrackerBenefits;
