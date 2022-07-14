import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = ({ roles }: any) => {
  const { auth }: any = useAuth();
  const location = useLocation();
  // console.log(auth.login.username);
  console.log(roles);

  return auth?.role ? (
    <Outlet />
  ) : auth?.login?.username ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
