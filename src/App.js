import { CssBaseline } from "@mui/material";
import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LocalStoragePage from "./pages/LocalStoragePage";
import ReduxPage from "./pages/ReduxPage";
import "./styles/App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/redux" element={<ReduxPage />} />
          <Route path="/localStorage" element={<LocalStoragePage />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </BrowserRouter>
      <CssBaseline />
    </>
  );
}

export default App;
