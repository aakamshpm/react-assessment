import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import { calendarSchedule } from "../../data/calendarSchedule.js";
import "./calendarView.css";

const CalendarView = () => {
  return (
    <div className="calendar-view">
      <div className="calendar-view__header">
        <h2 className="calendar-view__title">October 2025</h2>
        <div className="calendar-view__navigation">
          <button className="calendar-view__nav-button">
            <IoMdArrowBack />
          </button>
          <button className="calendar-view__nav-button">
            <IoMdArrowForward />
          </button>
        </div>
      </div>

      <div className="calendar-view__days-container">
        <div className="calendar-view__days">
          {calendarSchedule.map((day, idx) => (
            <div
              key={idx}
              className={`calendar-view__day ${
                day.isCurrentDay ? "calendar-view__day--current" : ""
              } ${!day.isActive ? "calendar-view__day--inactive" : ""}`}
            >
              <div className="calendar-view__day-header">
                <span className="calendar-view__day-name">{day.day}</span>
                <span className="calendar-view__day-date">{day.date}</span>
              </div>
              <div className="calendar-view__time-slots">
                {day.times.map((slot, i) => {
                  let slotClass = "calendar-view__time-slot";
                  if (!slot.available)
                    slotClass += " calendar-view__time-slot--disabled";
                  else if (slot.booked)
                    slotClass += " calendar-view__time-slot--booked";

                  return (
                    <div key={i} className={slotClass}>
                      {slot.time === "" ? "-" : slot.time}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalendarView;
