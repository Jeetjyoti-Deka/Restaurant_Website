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
import AboutScreen from "./screens/AboutScreen.jsx";
import ContactScreen from "./screens/ContactScreen.jsx";
import ItemScreen from "./screens/ItemScreen.jsx";
import MenuScreen from "./screens/MenuScreen.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<LandingScreen />} />
      <Route path="/home" element={<HomeScreen />} />
      <Route path="/about" element={<AboutScreen />} />
      <Route path="/contact" element={<ContactScreen />} />
      <Route path="/food/:id" element={<ItemScreen />} />
      <Route path="/menu" element={<MenuScreen />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
