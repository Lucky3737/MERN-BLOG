import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

export default function PrivateRoute() {
  const currentUSer = useSelector((state) => state.user);
  return currentUSer ? <Outlet /> : <Navigate to={"/sign-in"} />;
}
