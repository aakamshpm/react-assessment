import "./anatomyHealthCard.css";

const AnatomyHealthCard = ({ icon, status, bodySide }) => {
  return (
    <div className="anatomy-card">
      <div
        className={`anatomy-card__container ${
          bodySide === "left" ? "left" : ""
        }`}
      >
        <div className="anatomy-card__scanner">
          <img
            src="/images/scan.png"
            alt="Body scan"
            className="anatomy-card__scan-icon"
          />
          <div className="anatomy-card__scan-beam"></div>
        </div>

        <div
          className={`anatomy-card__status ${
            bodySide !== "left" ? "accent-bg" : "highlight-bg"
          }`}
        >
          <div className="anatomy-card__icon">
            <img src={icon} alt="Status icon" />
          </div>
          <p className="anatomy-card__text">{status}</p>
        </div>
      </div>
    </div>
  );
};

export default AnatomyHealthCard;
