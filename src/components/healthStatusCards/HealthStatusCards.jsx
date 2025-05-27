import { FaArrowRight } from "react-icons/fa";
import { healthData } from "../../data/healthData.js";
import "./healthStatusCards.css";

const HealthStatusCards = () => {
  const barColors = ["#b34946", "#79d1c4", "#ff7c57"];

  return (
    <div className="health-status-cards">
      {healthData.map((item, i) => (
        <div className="health-status-card" key={i}>
          <div className="header">
            <img src={item?.image} alt={item.name} />
            <p>{item.name}</p>
          </div>
          <p className="date">
            Date:{" "}
            {new Date(item.date).toLocaleDateString(undefined, {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </p>

          <div className="bar">
            <div
              className="bar-fill"
              style={{ backgroundColor: barColors[i % barColors.length] }}
            />
          </div>
        </div>
      ))}

      <div className="details">
        <p>Details</p>
        <FaArrowRight size={11} className="icon-dark" />
      </div>
    </div>
  );
};

export default HealthStatusCards;
