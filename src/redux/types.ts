
export interface Credentials {
    email: string;
    password: string;
    name?: string; // Опціональне поле, якщо використовується для реєстрації
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
