import App from "../App";
import DisplayProducts from "../pages/DisplayProducts";

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "products",
    element: <DisplayProducts />,
  },
];

export default routes;
