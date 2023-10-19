/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, ReactNode } from "react";
import { AuthContext } from "../Authentication/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../component/reuseable/Loading/Loading";
interface AuthProviderProps {
  children: ReactNode;
}
const PrivateRoute: React.FC<AuthProviderProps> = ({ children }) => {
  const { user, loading }: any = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <Loading />;
  }
  if (user?.email) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
