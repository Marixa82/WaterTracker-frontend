import './Welcome.css'



const WhyDrinkWater: React.FC = () => {
  return (
    <div className="container ">
      <div className="why-drink-container">
        <h3 className="why-drink-water-title">Why Drink Water</h3>
        <div className="list-container ">
          <div className="list-item">
            <span className="dot"></span>
            <p>Supply of nutrients to all organs</p>
          </div>
          <div className="list-item">
            <span className="dot"></span>
            <p>Providing oxygen to the lungs</p>
          </div>
          <div className="list-item">
            <span className="dot "></span>
            <p>Maintaining the work of the heart</p>
          </div>
          <div className="list-item">
            <span className="dot "></span>
            <p>Release of processed substances</p>
          </div>
          <div className="list-item">
            <span className="dot "></span>
            <p>Ensuring the stability of the internal environment</p>
          </div>
          <div className="list-item">
            <span className="dot "></span>
            <p>Maintaining within the normal temperature</p>
          </div>
          <div className="list-item">
            <span className="dot"></span>
            <p>Maintaining an immune system capable of resisting disease</p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default WhyDrinkWater;
