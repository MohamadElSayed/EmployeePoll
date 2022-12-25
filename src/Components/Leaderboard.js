import Menu from "./Menu";

const LeaderBoard = () => {
  return (
    <div className="container">
      <Menu page={"leaderboard"} />
      <div className="row justify-content-center">
        <table className="table table-bordered" style={{ width: "80%" }}>
          <thead>
            <tr>
              <th>Users</th>
              <th>Answered</th>
              <th>Created</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="row">
                  <div className="col" style={{ maxWidth: "30px" }}>
                    <img
                      src={require("../Images/Avatar-1.gif")}
                      style={{
                        width: "20px",
                        height: "20px",
                      }}
                    />
                  </div>
                  <div className="col">
                    <h6>Sarah Edos</h6>
                    <div>sarahedo</div>
                  </div>
                </div>
              </td>
              <td>10</td>
              <td>5</td>
            </tr>
            <tr>
              <td>
                <div className="row">
                  <div className="col" style={{ maxWidth: "30px" }}>
                    <img
                      src={require("../Images/Avatar-2.gif")}
                      style={{
                        width: "20px",
                        height: "20px",
                      }}
                    />
                  </div>
                  <div className="col">
                    <h6>Mohamad El-Sayed</h6>
                    <div>mohamad</div>
                  </div>
                </div>
              </td>
              <td>10</td>
              <td>5</td>
            </tr>

            <tr>
              <td>
                <div className="row">
                  <div className="col" style={{ maxWidth: "30px" }}>
                    <img
                      src={require("../Images/Avatar-3.gif")}
                      style={{
                        width: "20px",
                        height: "20px",
                      }}
                    />
                  </div>
                  <div className="col">
                    <h6>Mike Tsamis</h6>
                    <div>mtsamis</div>
                  </div>
                </div>
              </td>
              <td>10</td>
              <td>5</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaderBoard;
