import TrackerBenefitsList from "../../components/Welcome/TrackerBenefitsList";
import Welcome from "../../components/Welcome/Welcome";
import WhyDrinkWater from "../../components/Welcome/WhyDrinkWater";

const WelcomePage = () =>{
    return(
        <div>
      <Welcome trackerBenefitsList={<TrackerBenefitsList/>}  whyDrinkWater={<WhyDrinkWater/>}/>
       
      
    </div>
    )
}
export default WelcomePage;