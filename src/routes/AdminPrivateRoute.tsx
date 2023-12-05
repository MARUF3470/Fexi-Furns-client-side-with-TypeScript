/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode, useContext } from "react";
import { AuthContext } from "../Authentication/AuthProvider";
import Loading from "../component/reuseable/Loading/Loading";
import { Navigate, useLocation } from "react-router-dom";
import { useGetSingleUserQuery } from "../features/api/users/usersApi";
interface AuthProviderProps {
  children: ReactNode;
}
const AdminPrivateRoute: React.FC<AuthProviderProps> = ({ children }) => {
  const location = useLocation();
  const { user, loading }: any = useContext(AuthContext);
  const { data, isLoading } = useGetSingleUserQuery(user?.email);
  if (loading) {
    return <Loading />;
  }
  if (isLoading) {
    return <Loading />;
  }
  if (data?.role === "admin") {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminPrivateRoute;
