import "../scss/Index.scss";

const Index = ({ team }) => {
  const loaded = () => {
    return (
      <div className="index">
        <h1 className="index__heading">
          {team.city} {team.mascot}
        </h1>
        <div className="index__line-divide"></div>
        <div
          className="index__container"
          style={{ borderLeft: `10px solid ${team.team_color}` }}
        >
          <div className="index__game">
            <div className="index__subtitle">Upcoming game</div>
            <div className="index__game-matchup">Spartans @ Wildcats</div>
            <div className="index__game-datetime">08-12-23 7:00PM</div>
          </div>
          <div className="index__subtitle">Roster</div>
          <div className="index__roster">
            <div className="index__roster-status">
              <span className="index__roster-status-title">Active</span>
              <span className="index__roster-status-num">9</span>
            </div>
            <div className="index__roster-status">
              <span className="index__roster-status-title">Inactive</span>
              <span className="index__roster-status-num">2</span>
            </div>
            <div className="index__roster-status">
              <span className="index__roster-status-title">
                Injured Reserve
              </span>
              <span className="index__roster-status-num">1</span>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const loading = () => {
    <div className="loading">Loading...</div>;
  };
  return <div>{team ? loaded() : loading()}</div>;
};

export default Index;
