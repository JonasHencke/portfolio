import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.tsx";
import Privacy from "./pages/Privacy.tsx";
import Support from "./pages/Support.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/keep./privacy" element={<Privacy />} />
        <Route path="/keep./support" element={<Support />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
