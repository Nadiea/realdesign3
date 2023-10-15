import React from "react";
import Root from "../routes/Navbar";
import Navbar from "../routes/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../routes/Footer";

export default function Main() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
