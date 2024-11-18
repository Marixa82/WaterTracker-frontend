import { REGISTER_ROUTE } from "../constants/routes";
import Icon from "../Icon";
import { NavLink } from "react-router-dom";
import './Welcome.css'


export const TrackerBenefits: React.FC = () => {
  return (
    <div className="tracker-container py-4">
      <div className="mb-3">
        <h1 className="display-5">Water Consumption Tracker</h1>
        <p className="lead">Record daily water intake and track</p>
      </div>

      {/* Заголовок для Benefits */}
      <h2 className="mb-3">Tracker Benefits</h2>

      {/* Список підпунктів */}
      <ul className="p-0">
        <li className="d-flex align-items-center mb-2">
          <Icon iconId="icon-calendar-days" width={32} height={32} color="inherit" />
          <p className="ms-2 mb-0">Track your habits</p>
        </li>
        <li className="d-flex align-items-center mb-2">
          <Icon iconId="icon-presentation-chart-bar" width={32} height={32} />
          <p className="ms-2 mb-0">View statistics</p>
        </li>
        <li className="d-flex align-items-center mb-2">
          <Icon iconId="icon-eye-slash" width={32} height={32} />
          <p className="ms-2 mb-0">Personal rate setting</p>
        </li>
      </ul>

      {/* Кнопка для спроби трекера */}
      <NavLink to={REGISTER_ROUTE} className="auth-nav-link">
        <button type="button" className="btn btn-primary btn-lg w-100">Try tracker</button>
      </NavLink>
    </div>
  );
};

