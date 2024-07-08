import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignIn from "../pages/SignInPage/SignIn";
import SignUp from "../pages/SignUpPage/SignUp";
import LandingPage from "../pages/LandingPage/LandingPage";

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (<LandingPage/> ),
    },
    {
      path: ".signUp",
      element: (<SignUp/>)
    },
    {
      path: ".signIn",
      element: (<SignIn/>)
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default AppRoutes;
