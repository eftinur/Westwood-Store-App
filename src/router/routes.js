import { createBrowserRouter } from "react-router-dom";
import Register from "../components/Register/Register";
import SignIn from "../components/SignIn/SignIn";
import SingleCategory from "../components/SingleCategory/SingleCategory";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/categories",
        element: <SingleCategory />
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
    ],
  },
]);

export default router;
