import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import DashSideBar from "../components/DashSideBar";
import DashMainBar from "../components/DashMainBar";

export default function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  return (
    <div className="min-h-screen flex flex-cols md:flex-row">
      <div className="md:w-50">
        {/* sidebar */}
        <DashSideBar />
      </div>
      {tab === "profile" && <DashMainBar />}
    </div>
  );
}
