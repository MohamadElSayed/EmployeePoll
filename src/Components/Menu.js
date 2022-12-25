import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { authedUserLogout } from "../actions/authedUser";
import { getAvatarImage } from "../utils/_Avatar";

const Menu = ({ page, authedUser, dispatch }) => {
  const handleLogout = () => {
    dispatch(authedUserLogout());
  };
  return (
    <div className="container">
      <br />
      <div className="row">
        <div className="col">
          <div className="row">
            <div className="col">
              {page !== "home" ? <Link to="/">Home</Link> : "Home"}
            </div>
            <div className="col">
              {page !== "leaderboard" ? (
                <Link to="/leaderboard">Leaderboard</Link>
              ) : (
                "Leaderboard"
              )}
            </div>
            <div className="col" style={{ marginLeft: "25px" }}>
              {page !== "newpoll" ? <Link to="/newPoll">New</Link> : "New"}
            </div>
          </div>
        </div>
        <div className="col"></div>
        <div className="col"></div>
        <div className="col" style={{ textAlign: "right" }}>
          <div className="row">
            <div className="col">
              <img
                src={getAvatarImage(authedUser.avatarIndex)}
                style={{
                  width: "20px",
                  height: "20px",
                }}
              />
              {authedUser.name}
            </div>
            <div className="col">
              <Link onClick={handleLogout}>Logout</Link>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default connect((state) => ({
  authedUser: state.authedUser,
}))(Menu);
