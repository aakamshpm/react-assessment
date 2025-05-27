import DashboardOverview from "../dashboardOverview/DashboardOverview.jsx";
import "./dashboard.css";
import ActivityFeed from "../actitivityFeed/ActivityFeed.jsx";
import CalendarView from "../calendarView/CalendarView.jsx";
import { currentAppointments } from "../../data/currentAppoinments.js";
import SimpleAppointmentCard from "../simpleAppointmentCard/SimpleAppointmentCard.jsx";
import Header from "../header/Header.jsx";
import { upcomingSchedules } from "../../data/upcomingSchedules.js";

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
              <h3 className="upcoming-appointments__title">
                Upcoming Schedule
              </h3>
              <div className="upcoming-appointments__day-group">
                <p className="upcoming-appointments__day-label">On Thursday</p>
                <div className="upcoming-appointments__cards">
                  {upcomingSchedules.thursday.map((appointment, index) => (
                    <SimpleAppointmentCard
                      key={index}
                      title={appointment.title}
                      icon={appointment.icon}
                      time={appointment.time}
                    />
                  ))}
                </div>
              </div>

              <div className="upcoming-appointments__day-group">
                <p className="upcoming-appointments__day-label">On Saturday</p>
                <div className="upcoming-appointments__cards">
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
    </div>
  );
};

export default Dashboard;
