import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBarApp from "../components/NavBarApp";
import AboutScreen from "../pages/AboutScreen";
import ErrorScreen from "../pages/ErrorScreen";
import HomeScreen from "../pages/HomeScreen";
import CoinScreen from "../pages/CoinScreen";

const RoutesApp = ({ cambiarLogin }) => {
  return (
    <>
      <NavBarApp cambiarLogin={cambiarLogin} />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/coin/:id" element={<CoinScreen />} />

        <Route path="*" element={<ErrorScreen />} />
      </Routes>
    </>
  );
};

export default RoutesApp;
