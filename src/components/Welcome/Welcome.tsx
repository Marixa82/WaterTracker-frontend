import './Welcome.css'

interface WelcomeProps {
  trackerBenefitsList: JSX.Element;
  whyDrinkWater: JSX.Element;
}

function Welcome({ trackerBenefitsList, whyDrinkWater }: WelcomeProps) {
  return (
    <div className='welcome-container my-5 '>
      < div className="row welcome-item ">
        <div className="col-12 col-md-6">
          {trackerBenefitsList}
          </div>
          <div className="col-12 col-md-6  d-flex flex-column flex-md-row  ">
          <div className="why-drink-water">
            {whyDrinkWater}
            </div>
  
        </div>
      </div>
    </div>
  );
}

export default Welcome;
