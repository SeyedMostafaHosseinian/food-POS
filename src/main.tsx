import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import Home from "./pages/Home.tsx";
import Dashboard from "./pages/Dashboard.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Navigate to="/not-found" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
