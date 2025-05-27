import "./simpleAppointmentCard.css";

const SimpleAppointmentCard = ({ title, icon, time, doctorName, isActive }) => {
  return (
    <div
      className={`appointment-card ${
        isActive ? "appointment-card--active" : ""
      }`}
    >
      <div className="appointment-card__header">
        <h3 className="appointment-card__title">{title}</h3>
        {icon && <img className="appointment-card__icon" src={icon} alt="" />}
      </div>
      <div className="appointment-card__details">
        <p className="appointment-card__time">{time}</p>
        {doctorName && <p className="appointment-card__doctor">{doctorName}</p>}
      </div>
    </div>
  );
};

export default SimpleAppointmentCard;
