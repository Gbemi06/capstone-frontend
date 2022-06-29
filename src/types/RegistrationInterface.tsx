export interface RegistrationInterface {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: string;
}

export interface LoginInterface {
  username: string;
  password: string;
}
