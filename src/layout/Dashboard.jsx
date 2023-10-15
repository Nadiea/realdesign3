import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../routes/Sidebar";

export default function Main() {
  return (
    <div>
     <Sidebar/>
      <Outlet/>
    </div>
  );
}