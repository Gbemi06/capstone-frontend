import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { AuthContextInterface } from "../types/RegistrationInterface";

// interface AuthContextInterface {
//   auth: AuthInterface;
//   setAuth: Dispatch<SetStateAction<AuthInterface>>;
// }
interface Props {
  AllowedRoles: string[];
}

const RequireAuth = ({ AllowedRoles }: Props) => {
  const { auth }: AuthContextInterface = useAuth();
  const location = useLocation();
  console.log(auth.role);

  console.log(AllowedRoles);

  return AllowedRoles.includes(auth?.role) ? (
    <Outlet />
  ) : auth?.login?.username ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;

//   return auth?.role.find((roles: string) => AllowedRoles?.includes(roles)) ? (
//     <Outlet />
//   ) : auth?.login?.username ? (
//     <Navigate to="/unauthorized" state={{ from: location }} replace />
//   ) : (
//     <Navigate to="/login" state={{ from: location }} replace />
//   );
// };

// export default RequireAuth;
