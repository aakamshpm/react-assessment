import ActivityFeedChart from "../activityFeedChart/ActivityFeedChart";
import "./activityFeed.css";

const ActivityFeed = () => {
  return (
    <div className="activity-feed">
      <div className="activity-feed__header">
        <h2 className="activity-feed__heading">Activity</h2>
        <p className="activity-feed__subtitle">3 appointments this week</p>
      </div>

      <div className="activity-feed__chart">
        <ActivityFeedChart />
      </div>
    </div>
  );
};

export default ActivityFeed;
