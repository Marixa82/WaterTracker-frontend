
export interface UserData  {
  email?: string;
  name?: string;
  password?: string;
  gender?: string;
  avatarURL?: string;
  waterRate?: number;
  verify?: string;
  weight?: number;
  activityTime?: number;
  calculatedWater?: number;
  plannedWater?: number; 
}
export interface UserAvatar {
  avatarURL: string;
}
export interface UploadAvatarRequest {
  file: File; // фото, яке ви завантажуєте
}
export interface Credentials {
    email: string;
    password: string;
    name?: string;
     
  }
  
  export interface SignInResponse {
    token: string;
    userData: {
      name: string;
      email: string;
      
    };
  }
  export interface CurrentUser {
    id: number;
    name: string;
    email: string;
};
export interface UserToken {
  userId: string;
  token: string;
}
 export interface UserWaterMonthResponse {
    day: string;
    month: string;
    year: string;
    time: string;
    amount: number;
    waterRateForThisDay: number;
    owner: string;
  };
  export interface WaterMonthData {
    waterMonth: Partial<UserWaterMonthResponse>;
  };

export interface UserWaterTodayResponse {
    
    id: string;
    time: string;
    amount: number;
    owner: string;
  
  };
  export interface WaterTodayData {
    waterList: UserWaterTodayResponse[]; 
};
export interface SaveWaterDataPayload {
 
  weight: number;
  activityTime: number;
  calculatedWater: number;
  plannedWater: number;
}