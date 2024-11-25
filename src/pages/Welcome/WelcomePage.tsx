import TrackerBenefitsList from "../../components/Welcome/TrackerBenefitsList";
import Welcome from "../../components/Welcome/Welcome";
import WhyDrinkWater from "../../components/Welcome/WhyDrinkWater";


const WelcomePage = () =>{
    return(
        <>
          <div className="welcome-container">
        <Welcome trackerBenefitsList={<TrackerBenefitsList/>}  whyDrinkWater={<WhyDrinkWater/>}/>
         
        
      </div>
        </>
    )
}
export default WelcomePage;