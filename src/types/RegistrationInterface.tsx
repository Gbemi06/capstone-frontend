import { Dispatch, SetStateAction } from "react";

export interface RegistrationInterface {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: string;
  profilePic?: string;
}

export interface LoginInterface {
  username: string;
  password: string;
}

export interface AuthInterface {
  login: LoginInterface;
  role: string;
  accessToken: string;
}

export interface CarouselInterface {
  path: string;
  originalname: string;
}

export interface AuthContextInterface {
  auth: AuthInterface;
  setAuth: Dispatch<SetStateAction<AuthInterface>>;
}

export interface CourseInterface {
  courseName: string;
  courseCode: string;
  department: string;
  description: string;
  credits: string;
  prerequisites: string;
  term: string;
  year: string;
  instructor: string;
  // studentsList: string[];
}
