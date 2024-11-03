
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
export interface UserWaterResponse {
  token: string;
  waterDate: {
    day: string;
    month: string;
    year: string;
    time: string;
    amount: number;
    waterRateForThisDay: number;
    owner: string;
  };
}