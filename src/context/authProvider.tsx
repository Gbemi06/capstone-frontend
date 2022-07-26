import { createContext, useState, ReactNode } from "react";
import {
  AuthContextInterface,
  AuthInterface,
} from "../types/RegistrationInterface";

const AuthContext = createContext<AuthContextInterface>({
  auth: {
    login: {
      username: "",
      password: "",
    },
    role: "",
    accessToken: "",
  },
  setAuth: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [auth, setAuth] = useState<AuthInterface>({
    login: {
      username: "",
      password: "",
    },
    role: "",
    accessToken: "",
  });
  console.log(auth);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
