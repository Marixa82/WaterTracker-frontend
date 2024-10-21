import TrackerBenefitsList from "../../components/Welcome/TrackerBenefitsList";
import Welcome from "../../components/Welcome/Welcome";

const WelcomePage = () =>{
    return(
        <div>
      <Welcome trackerBenefitsList={<TrackerBenefitsList/>} />
       
      
    </div>
    )
}
export default WelcomePage;