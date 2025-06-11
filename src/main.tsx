import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import Home from "./pages/Home.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import Settings from "./pages/Settings/Settings.tsx";
import Appearance from "./pages/Settings/children/Appearance.tsx";
import YourRestaurant from "./pages/Settings/children/YourRestaurant.tsx";
import ProductsManagements from "./pages/Settings/children/ProductsManagements.tsx";
import NotFound from "./pages/NotFound.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />}>
            <Route index element={<Navigate to="appearance" replace />} />
            <Route path="appearance" element={<Appearance />} />
            <Route path="your-restaurant" element={<YourRestaurant />} />
            <Route
              path="products-management"
              element={<ProductsManagements />}
            />
            <Route
              path="*"
              element={
                <p className="text-white text-h1 w-full h-full flex items-center justify-center">
                  Coming Soon...
                </p>
              }
            />
          </Route>
          <Route path="not-found" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/not-found" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
