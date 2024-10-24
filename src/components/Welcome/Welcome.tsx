// import  { ReactNode } from 'react';

// import { Container } from "react-bootstrap";

// import TrackerBenefitsList from "./TrackerBenefitsList";
interface WelcomeProps {
  trackerBenefitsList: JSX.Element;
  whyDrinkWater: JSX.Element;
}

function Welcome({ trackerBenefitsList, whyDrinkWater }: WelcomeProps) {
  return (
    < >
      <div className="d-flex m-0 flex-column container-sm">
        <h1>WaterСonsumptionTracker</h1>
        <h2>Record daily water intake and track</h2>
        {trackerBenefitsList}
        {whyDrinkWater}

      </div>
    </>
  );
}

export default Welcome;
