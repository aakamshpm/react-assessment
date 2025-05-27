import DashboardOverview from "../dashboardOverview/dashboardOverview";
import "./dashboard.css";
import ActivityFeed from "../actitivityFeed/ActivityFeed";
import CalendarView from "../calendarView/CalendarView";
import { currentAppointments } from "../../data/currentAppoinments";
import SimpleAppointmentCard from "../simpleAppointmentCard/SimpleAppointmentCard";
import Header from "../header/Header";
import { upcomingSchedules } from "../../data/upcomingSchedules";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Header />

      <div className="dashboard__content">
        <div className="dashboard__main">
          <DashboardOverview />
          <ActivityFeed />
        </div>

        <div className="dashboard__sidebar">
          <CalendarView />

          <div className="dashboard__appointments">
            <div className="dashboard__appointments-list">
              {currentAppointments.map(
                ({ title, doctorName, icon, isActive, time }, index) => (
                  <SimpleAppointmentCard
                    key={index}
                    title={title}
                    doctorName={doctorName}
                    icon={icon}
                    isActive={isActive}
                    time={time}
                  />
                )
              )}
            </div>

            <div className="upcoming-appointments">
              <h2>The Upcoming Schedule</h2>
              <div>
                <p>On Thursday</p>
                {upcomingSchedules.thursday.map((appointment, index) => (
                  <SimpleAppointmentCard
                    key={index}
                    title={appointment.title}
                    icon={appointment.icon}
                    time={appointment.time}
                  />
                ))}
              </div>

              <div>
                <p>On Saturday</p>
                {upcomingSchedules.saturday.map((appointment, index) => (
                  <SimpleAppointmentCard
                    key={index}
                    title={appointment.title}
                    icon={appointment.icon}
                    time={appointment.time}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
