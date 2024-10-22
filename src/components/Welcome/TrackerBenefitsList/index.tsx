
import { Container } from 'react-bootstrap';
import TrackerBenefits from '../TrackerBenefits';



function TrackerBenefitsList() {
  return (
    <Container>
      <div className="d-flex align-items-wrap">
        <h1 className='mb-2,5'>TrackerBenefitsList</h1>
       <TrackerBenefits/>
      </div>
    </Container>
  );
}

export default TrackerBenefitsList;
