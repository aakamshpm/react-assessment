import "./activityFeedChart.css";

const ActivityFeedChart = () => {
  return (
    <div className="graph">
      <div className="day">
        <div className="bars">
          <div className="bar light h-40"></div>
          <div className="bar cyan h-60"></div>
          <div className="bar blue h-50"></div>
        </div>
        <div>Mon</div>
      </div>
      <div className="day">
        <div className="bars">
          <div className="bar cyan h-70"></div>
          <div className="bar blue h-60"></div>
          <div className="bar light h-30"></div>
        </div>
        <div>Tues</div>
      </div>
      <div className="day">
        <div className="bars">
          <div className="bar light h-50"></div>
          <div className="bar cyan h-30"></div>
          <div className="bar blue h-40"></div>
        </div>
        <div>Wed</div>
      </div>
      <div className="day">
        <div className="bars">
          <div className="bar light h-60"></div>
          <div className="bar cyan h-50"></div>
          <div className="bar blue h-45"></div>
        </div>
        <div>Thurs</div>
      </div>
      <div className="day">
        <div className="bars">
          <div className="bar cyan h-70"></div>
          <div className="bar blue h-60"></div>
          <div className="bar light h-40"></div>
        </div>
        <div>Fri</div>
      </div>
      <div className="day">
        <div className="bars">
          <div className="bar light h-55"></div>
          <div className="bar cyan h-45"></div>
          <div className="bar blue h-30"></div>
        </div>
        <div>Sat</div>
      </div>
      <div className="day">
        <div className="bars">
          <div className="bar light h-50"></div>
          <div className="bar cyan h-60"></div>
          <div className="bar blue h-40"></div>
        </div>
        <div>Sun</div>
      </div>
    </div>
  );
};

export default ActivityFeedChart;
