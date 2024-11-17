import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5); /* затемнення заднього фону */
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`;
export const UploadPhotoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const AvatarWrapper = styled.div`
  width: 50px; /* фіксована ширина */
  height: 50px; /* фіксована висота */
  border-radius: 50%; /* кругла форма */
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px; /* відступ між аватаром і кнопкою */
  background-color: #f0f0f0; /* фон для пустого місця, якщо аватар не завантажено */
`;

export const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const AvatarInitial = styled.span`
  font-size: 24px;
  color: white;
  background-color: #9caab8;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;

export const UploadLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const HiddenFileInput = styled.input`
  display: none; /* прихований інпут */
`;
