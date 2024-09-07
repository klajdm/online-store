import { createBrowserRouter, Navigate } from "react-router-dom";
import AboutPage from "../../features/about/AboutPage";
import ProductDetails from "../../features/catalog/ProductDetails";
import NotFound from "../errors/NotFound";
import ServerError from "../errors/ServerError";
import Catalog from "../../features/catalog/Catalog";
import HomePage from "../../features/home/HomePage";
import App from "../layout/App";
import ContactPage from "../../features/contact/ContactPage";
import BasketPage from "../../features/basket/BasketPage";
import RequireAuth from "./RequireAuth";
import Register from "../../features/account/Register";
import Login from "../../features/account/Login";
import Orders from "../../features/orders/Orders";
import CheckoutWrapper from "../../features/checkout/CheckoutWrapper";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <RequireAuth />,
        children: [
          { path: "/checkout", element: <CheckoutWrapper /> },
          { path: "/orders", element: <Orders /> },
        ],
      },
      { path: "", element: <HomePage /> },
      { path: "catalog", element: <Catalog /> },
      { path: "catalog/:id", element: <ProductDetails /> },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "/server-error", element: <ServerError /> },
      { path: "/not-found", element: <NotFound /> },
      { path: "/basket", element: <BasketPage /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "*", element: <Navigate replace to="/not-found" /> },
    ],
  },
]);
