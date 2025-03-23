import HomePage from "../pages/HomePage";
import SignUpPage from "../pages/SignUpPage";
import LoginPage from "../pages/LoginPage";
import SettingsPage from "../pages/SettingsPage";
import ProfilePage from "../pages/ProfilePage";
import { Navigate, useRoutes } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";



const Routes = () => {
  const { authUser } = useAuthStore();

  const routes = [
    {
      path: "/",
      element: authUser ? <HomePage /> : <Navigate to="/login" />,
    },
    {
      path: "/signup",
      element: !authUser ? <SignUpPage /> : <Navigate to="/" />,
    },
    {
      path: "/login",
      element: !authUser ? <LoginPage /> : <Navigate to="/" />,
    },
    {
      path: "/settings",
      element: <SettingsPage />,
    },
    {
      path: "/profile",
      element: authUser ? <ProfilePage /> : <Navigate to="/login" />,
    },
  ];
  return useRoutes(routes);
};
export default Routes;

