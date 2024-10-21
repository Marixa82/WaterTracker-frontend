import Icon from "../Icon";

const TrackerBenefits: React.FC = () =>{
  return(
    <div>
      <ul>
        <li>
        <Icon iconId="icon-eye" width={32} height={32} color="black" />
        <h3>Track your habits</h3>
        </li>
        <li><Icon iconId="icon-presentation-chart-bar" width={32} height={32} /><h3>View statistics</h3></li>
        {/* <li><Icon iconId="icon-wrench" width={32} height={32} /><h3>Personal rate setting</h3></li> */}
      </ul>
    </div>
  )
}
export default TrackerBenefits;
