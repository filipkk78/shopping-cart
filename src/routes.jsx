import App from "./App";
import Cart from "./components/Cart/Cart";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Shop from "./components/Shop/Shop";
import Home from "./components/Home/Home";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "cart", element: <Cart /> },
      { path: "shop", element: <Shop /> },
    ],
  },
  {
    path: "cart",
    element: <Cart />,
  },
];

export default routes;
