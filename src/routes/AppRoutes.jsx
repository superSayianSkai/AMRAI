import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "../pages/SignInPage/SignIn";
import SignUp from "../pages/SignUpPage/SignUp";
import LandingPage from "../pages/LandingPage/LandingPage";
import ChatAMRAI from "../pages/Chatpage/ChatAMRAI";
import InputData from "./../pages/InpudataPage/InputData"
import AuthProvider from "../context/Context"
import Dashboard from "../pages/Dashboard/Dashboard"
const AppRoutes = () => {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/signIn",
        element: <SignIn />,
      },
      {
        path: "/amrai",
        element: <ChatAMRAI/>,
      },
      {
        path: "/inputData",
        element: <InputData/>,
      },
     {
        path: "/dashboard",
        element: <Dashboard/>,
      },

    ],
  );
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default AppRoutes;
