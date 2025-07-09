import App from "../App";
import ProductFetcher from "./ProductFetcher";
import ShoppingCart from "../pages/ShoppingCart";
import LandingPage from "../pages/LandingPage";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <LandingPage /> },
      {
        path: "products",
        element: <ProductFetcher />,
      },
      {
        path: "cart",
        element: <ShoppingCart />,
      },
    ],
  },
];

export default routes;
