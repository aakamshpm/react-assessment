import { GoZoomIn } from "react-icons/go";
import "./anatomySection.css";
import { anatomyHealthCardData } from "../../data/anatomyHealthCardData";
import AnatomyHealthCard from "../anatomyHealthCard/AnatomyHealthCard.jsx";

const AnatomySection = () => {
  return (
    <div className="anatomy-section">
      <div className="anatomy-section__image-container">
        <img
          src="/images/human-anatomy.png"
          alt="Human anatomy diagram"
          className="anatomy-section__image"
        />

        <button className="anatomy-section__zoom">
          <GoZoomIn />
        </button>

        {anatomyHealthCardData.map(
          ({ icon, status, bodySide, className }, i) => (
            <div key={i} className={`anatomy-card-position ${className}`}>
              <AnatomyHealthCard
                icon={icon}
                status={status}
                bodySide={bodySide}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default AnatomySection;
