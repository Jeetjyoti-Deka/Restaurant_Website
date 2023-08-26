import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import LandingScreen from "./screens/LandingScreen.jsx";
import HomeScreen from "./screens/HomeScreen.jsx";
import CartScreen from "./screens/CartScreen.jsx";
import ContactScreen from "./screens/ContactScreen.jsx";
import ItemScreen from "./screens/ItemScreen.jsx";
import MenuScreen from "./screens/MenuScreen.jsx";
import LoginScreen from "./screens/LoginScreen.jsx";
import { Provider } from "react-redux";
import store from "./store.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<LandingScreen />} />
      <Route path="/home" element={<HomeScreen />} />
      <Route path="/cart" element={<CartScreen />} />
      <Route path="/contact" element={<ContactScreen />} />
      <Route path="/food/:id" element={<ItemScreen />} />
      <Route path="/menu" element={<MenuScreen />} />
      <Route path="/login" element={<LoginScreen />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
