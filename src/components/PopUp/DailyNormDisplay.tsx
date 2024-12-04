import { useState } from "react";
import MyDailyNorm from "./MyDailyNorm";
import { Button } from "react-bootstrap";
import { useAppSelector } from "../../hooks/hook";

const DailyNormDisplay = () => {
  const {waterRate} = useAppSelector((state) => state.auth.userData); // Отримуємо дані з глобального стану
  
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleEditClick = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  // const handleSaveNorm = (newNorm: number) => {
  //   setDailyNorm(newNorm);
  //   setShowModal(false);
  // };

  return (
    <div className="text-center mt-4">
      <h4>Розрахована денна норма</h4>
      <p>{waterRate?.toFixed(1)} л</p>
      <Button variant="primary" onClick={handleEditClick}>
        Edit
      </Button>

      <MyDailyNorm
        show={showModal}
        handleClose={handleCloseModal}
        // saveNorm={handleSaveNorm}
        // currentNorm={dailyNorm}
      />
    </div>
  );
};

export default DailyNormDisplay;