import {
  BrowserRouter as Router,
  Routes,
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import HomeScreen from "@screens/HomeScreen";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
