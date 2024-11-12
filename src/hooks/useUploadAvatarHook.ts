import { useAppDispatch } from "./hook";
import { useState } from "react";
import { authOperations } from "../redux/auth";


interface UseUploadAvatarResult {
  avatarUrl?: string;
  isLoading: boolean;
  uploadAvatar?: (file: File) => Promise<void>;
}

export const useUploadAvatar = (
    initialAvatarUrl?: string
): UseUploadAvatarResult => {
  const dispatch = useAppDispatch();
  const [avatarUrl, setAvatarUrl] = useState(initialAvatarUrl);
  const [isLoading, setIsLoading] = useState(false);

  const uploadAvatar = async (file: File): Promise<void> => {
    setIsLoading(true);
    try {
      const resultAction = await dispatch(authOperations.uploadAvatarUser({ file }));

      if (authOperations.uploadAvatarUser.fulfilled.match(resultAction)) {
        setAvatarUrl(resultAction.payload.avatarURL);  // оновлюємо URL аватара
        // setUserName(resultAction.payload);    // оновлюємо ім'я користувача, якщо це потрібно
      }
    } catch (error) {
      console.error("Помилка завантаження аватара:", error);
    } finally {
      setIsLoading(false);
    }
    
  };

  return { avatarUrl, isLoading, uploadAvatar };
};


// export const useUploadAvatar = () => {
//     const dispatch = useAppDispatch();
//     const [isLoading, setIsLoading] = useState(false);
   
  
//     const uploadAvatar = async (file: File): Promise<string | null> => {
//       setIsLoading(true);
      
//       try {
//         const resultAction = await dispatch(authOperations.uploadAvatarUser({ file }));
//         if (authOperations.uploadAvatarUser.fulfilled.match(resultAction)) {
//           return resultAction.payload.avatarURL;
//         }
//       } finally {
//         setIsLoading(false);
//       }
//       return null;
//     };
  
//     return { uploadAvatar, isLoading };
//   };