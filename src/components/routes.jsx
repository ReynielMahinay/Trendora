import App from "../App";
import ProductFetcher from "./ProductFetcher";

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "products",
    element: <ProductFetcher />,
  },
];

export default routes;
