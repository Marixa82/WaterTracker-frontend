// import  { ReactNode } from 'react';
// import TrackerBenefitsList from "./TrackerBenefitsList";
interface WelcomeProps {
  trackerBenefitsList: JSX.Element;
}

function Welcome({ trackerBenefitsList }: WelcomeProps) {
  return (
    <>
      <h1>WaterСonsumptionTracker</h1>
      <h2>Record daily water intake and track</h2>
      {trackerBenefitsList}
    </>
  );
}

export default Welcome;
