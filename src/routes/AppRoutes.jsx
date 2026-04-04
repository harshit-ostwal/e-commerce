import { createBrowserRouter, RouterProvider } from "react-router";
import SignIn from "../pages/auth/sign-in.jsx";
import SignUp from "../pages/auth/sign-up.jsx";
import AuthLayout from "../layouts/AuthLayout.jsx";

function AppRoutes() {
  const router = createBrowserRouter([
    {
      path: "/auth",
      element: <AuthLayout />,
      children: [
        {
          path: "sign-in",
          element: <SignIn />,
        },
        {
          path: "sign-up",
          element: <SignUp />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default AppRoutes;
