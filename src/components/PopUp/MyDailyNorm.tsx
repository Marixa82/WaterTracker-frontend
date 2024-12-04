import { useState, useEffect } from "react";
import { Modal, Button, Form} from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../hooks/hook";

import { authOperations } from "../../redux/auth";


interface MyDailyNormProps {
  show: boolean;
  handleClose: () => void;
}

const MyDailyNorm : React.FC<MyDailyNormProps> = ({ show, handleClose }) => {
  // const [gender, setGender] = useState<string>("female");
  const [weight, setWeight] = useState<number | undefined>();
  const [activityTime, setActivityTime] = useState<number>(0);
  const [calculatedWater, setCalculatedWater] = useState<number | null>(null);
  const [plannedWater, setPlannedWater] = useState<number | undefined>();
 
  const dispatch = useAppDispatch();
const {gender,waterRate} = useAppSelector((state) => state.auth.userData);
// Встановлення початкових значень для ваги та часу активності (якщо потрібно)
useEffect(() => {
  if (waterRate) {
    setPlannedWater(waterRate);  // Припустимо, що waterRate з бекенду містить попередньо заплановану кількість води
  }
}, [waterRate]);
  // Функція для розрахунку денної норми води
  const calculateWaterNorm = () => {
    if (weight) {
      const baseNorm = gender === "male" ? 35 : 31; // мл на кг ваги
      const activityBonus = activityTime * 0.5; // 500 мл за годину активності
      const waterNorm = ((weight * baseNorm) / 1000) + activityBonus;
      setCalculatedWater(parseFloat(waterNorm.toFixed(1)));
    }
  };
  // Збереження даних на бекенд
  const handleSubmit = async () => {
    if (plannedWater && calculatedWater) {
      const payload = {
        weight: weight!,
        activityTime,
        calculatedWater,
        plannedWater,
      };
  // Відправлення даних через saveWaterData
  const resultAction = await dispatch(authOperations.waterRate(payload));

  if (authOperations.waterRate.fulfilled.match(resultAction)) {
    handleClose();
     // Закриття модального вікна при успіху
  }
}
};
  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={true}>
      <Modal.Header closeButton>
        <Modal.Title>Calculate your rate</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* {error && <Alert variant="danger">{error}</Alert>} */}
        <Form>
          {/* Вибір гендеру */}
          <Form.Group controlId="formGender">
            <Form.Label>Виберіть стать:</Form.Label>
            <div>
              <Form.Check
                inline
                type="radio"
                label="For girl"
                name="gender"
                value="female"
                checked={gender === "female"}
                onChange={() => {}}
                disabled
              />
              <Form.Check
                inline
                type="radio"
                label="For man"
                name="gender"
                value="male"
                checked={gender === "male"}
                onChange={() => {}}
                disabled
              />
            </div>
          </Form.Group>

          {/* Введення ваги */}
          <Form.Group controlId="formWeight" className="mt-3">
            <Form.Label>Вага (кг)</Form.Label>
            <Form.Control
              type="number"
              value={weight ?? ""}
              onChange={(e) => setWeight(parseFloat(e.target.value))}
              min="30"
              max="200"
            />
          </Form.Group>

          {/* Введення часу фізичної активності */}
          <Form.Group controlId="formActivityTime" className="mt-3">
            <Form.Label>Час активних занять (годин на день)</Form.Label>
            <Form.Control
              type="number"
              value={activityTime}
              onChange={(e) => setActivityTime(parseFloat(e.target.value))}
              min="0"
              max="24"
            />
          </Form.Group>

          {/* Розрахунок денної норми води */}
          <Button variant="primary" className="mt-3" onClick={calculateWaterNorm}>
            Розрахувати норму
          </Button>

          {/* Виведення розрахованої норми води */}
          {calculatedWater !== null && (
            <div className="mt-3">
              <p>
                The required amount of water in liters per day:{" "}
                <strong>{calculatedWater} л</strong>
              </p>
            </div>
          )}

          {/* Поле для запису кількості випитої води */}
          <Form.Group controlId="formPlannedWater" className="mt-3">
            <Form.Label>Кількість води, яку ви плануєте випити (л)</Form.Label>
            <Form.Control
              type="number"
              value={plannedWater ?? ""}
              onChange={(e) => setPlannedWater(parseFloat(e.target.value))}
              min="0"
              step="0.1"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Скасувати
        </Button>
        <Button variant="success" onClick={handleSubmit} >
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyDailyNorm;
