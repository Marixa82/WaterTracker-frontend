import { UserData } from "../../redux/types";
interface FormUserDataProps {
  userData: UserData;
  onFieldUpdate: (field: keyof UserData, value: string) => void;
}
export const FormUserData: React.FC<FormUserDataProps> = ({ userData, onFieldUpdate }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onFieldUpdate(name as keyof UserData, value); // Оновлюємо конкретне поле
  };
    return(
      <>
      <div>
        <h3>Your gender identity</h3>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            id="genderGirl"
            checked={userData.gender === 'Girl'}
            onChange={() => onFieldUpdate('gender', 'Girl')}
          />
          <label className="form-check-label" htmlFor="genderGirl">Girl</label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            id="genderMan"
            checked={userData.gender === 'Man'}
            onChange={() => onFieldUpdate('gender', 'Man')}
          />
          <label className="form-check-label" htmlFor="genderMan">Man</label>
        </div>
      </div>

      <form>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Your name</label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="name"
            placeholder="Username"
            value={userData.name || ''}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="name@example.com"
            value={userData.email || ''}
            onChange={handleInputChange}
          />
        </div>
      </form>
    </>
    )
}