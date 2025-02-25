import App from "./App";
import Cart from "./components/Cart/Cart";
import ErrorPage from "./components/ErrorPage/ErrorPage";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "cart",
    element: <Cart />,
  },
];

export default routes;
