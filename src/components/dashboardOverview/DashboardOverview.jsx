import { IoMdArrowDropdown } from "react-icons/io";
import AnatomySection from "../anatomySection/AnatomySection";
import HealthStatusCards from "../healthStatusCards/HealthStatusCards";
import "./dashboardOverview.css";

const DashboardOverview = () => {
  return (
    <div className="dashboard-overview">
      <div className="dashboard-overview__header">
        <h2 className="dashboard-overview__heading">Dashboard</h2>
        <div className="dashboard-overview__week-selector">
          <p className="dashboard-overview__week-label">This week</p>
          <IoMdArrowDropdown className="icon-dark" />
        </div>
      </div>

      <div className="dashboard-overview__content">
        <AnatomySection />
        <HealthStatusCards />
      </div>
    </div>
  );
};

export default DashboardOverview;
