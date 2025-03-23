import Navbar from "./components/Navbar";
import { useAuthStore } from "./store/useAuthStore";
import { useThemeStore } from "./store/useThemeStore";
import { useEffect } from "react";

import { Loader } from "lucide-react";
import { Toaster } from "react-hot-toast";
import  Routes  from "./routes";
const App = () => {
  const { authUser, checkAuth, isCheckingAuth, onlineUsers } = useAuthStore();
  const { theme } = useThemeStore();


  console.log({ onlineUsers });

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  //  let element = useRoutes([
  //    {
  //      path: "/",
  //      element: authUser ? <HomePage /> : <Navigate to="/login" />,
  //    },
  //    {
  //      path: "/signup",
  //      element: !authUser ? <SignUpPage /> : <Navigate to="/" />,
  //    },
  //    {
  //      path: "/login",
  //      element: !authUser ? <LoginPage /> : <Navigate to="/" />,
  //    },
  //    {
  //      path: "/settings",
  //      element: <SettingsPage />,
  //    },
  //    {
  //      path: "/profile",
  //      element: authUser ? <ProfilePage /> : <Navigate to="/login" />,
  //    },
  //  ]);

  console.log({ authUser });

  if (isCheckingAuth && !authUser)
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin" />
      </div>
    );

   

  return (
    <div data-theme={theme}>
      <Navbar />
       <Routes/>
      <Toaster />
    </div>
  );
};
export default App;
