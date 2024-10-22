import Icon from "../Icon";



const TrackerBenefits: React.FC = () =>{
  return(

    <>
      <div className="card-border-0" >
        
          <ul className="ps-0">
            <li className="d-flex align-items-center mb-3">
              <Icon iconId="icon-calendar-days" width={32} height={32} color="inherit" />
            <h3 className="ms-2 mb-0">Track your habits</h3>
            </li>
            <li className="d-flex align-items-center mb-3"><Icon iconId="icon-presentation-chart-bar" width={32} height={32} /><h3 className="ms-2 mb-0">View statistics</h3></li>
            <li className="d-flex align-items-center"><Icon iconId="icon-eye-slash" width={32} height={32} /><h3 className="ms-2 mb-0">Personal rate setting</h3></li>
          </ul>
      </div>
      <button type="button" className="btn btn-primary btn-lg w-100">Try tracker</button>
    </>
  )
}
export default TrackerBenefits;
