

interface WelcomeProps {
  trackerBenefitsList: JSX.Element;
  whyDrinkWater: JSX.Element;
}

function Welcome({ trackerBenefitsList, whyDrinkWater }: WelcomeProps) {
  return (
    <div>
      < div className="row">
        <div className="col-12 col-md-6">
          {trackerBenefitsList}
          </div>
          <div className="col-12 col-md-6">
          {whyDrinkWater}
  
        </div>
      </div>
    </div>
  );
}

export default Welcome;
