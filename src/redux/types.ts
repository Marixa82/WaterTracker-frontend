
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
}