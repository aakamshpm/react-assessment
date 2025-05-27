import { useState } from "react";
import Dashboard from "./components/dashboard/Dashboard";
import Sidebar from "./components/sidebar/Sidebar";

const App = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="app-layout">
      <Sidebar
        collapsed={sidebarCollapsed}
        onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
      />
      <div className={`main-content ${sidebarCollapsed ? "collapsed" : ""}`}>
        <Dashboard />
      </div>
    </div>
  );
};

export default App;
