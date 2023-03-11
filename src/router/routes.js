import { createBrowserRouter } from "react-router-dom";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";
import Main from "../layout/Main";
import CategoryPage from "../pages/CategoryPage/CategoryPage";
import Home from "../pages/Home/Home";
import ProductPage from "../pages/ProductPage/ProductPage";
import CartPage from "../pages/CartPage/CartPage";

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
        element: <CategoryPage />
      },
      {
        path: "/product",
        element: <ProductPage />
      },
      {
        path: "/cart",
        element: <CartPage />
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
