import { useState } from "react";
import "./sidebar.css";
import SidebarTab from "./SidebarTab";
import Content from "./Content";

export default function Sidebar() {
  const [activeTab, setActiveTab] = useState("property");

  return (
    <div className="sidebar">
      <SidebarTab activeTab={activeTab} setActiveTab={setActiveTab} />
      <Content activeTab={activeTab} />
    </div>
  );
}