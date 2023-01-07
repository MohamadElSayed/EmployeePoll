import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { authedUserLogout } from "../actions/authedUser";
import { getAvatarImage } from "../utils/_Avatar";

const Menu = ({ authedUser, dispatch }) => {
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
              {window.location.pathname !== "/" ? (
                <Link to="/">Home</Link>
              ) : (
                "Home"
              )}
            </div>
            <div className="col">
              {window.location.pathname !== "/leaderboard" ? (
                <Link to="/leaderboard">Leaderboard</Link>
              ) : (
                "Leaderboard"
              )}
            </div>
            <div className="col">
              {window.location.pathname !== "/add" ? (
                <Link to="/add">New</Link>
              ) : (
                "New"
              )}
            </div>
          </div>
        </div>
        <div className="col" />
        <div className="col-md-auto text-end">
          <img
            src={authedUser ? getAvatarImage(authedUser.avatarIndex) : ""}
            style={{
              width: "20px",
              height: "20px",
            }}
            alt=""
          />
          {authedUser ? authedUser.name : ""}
        </div>

        <div className="col col-lg-2 text-end">
          <Link onClick={handleLogout}>Logout</Link>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default connect((state) => ({
  authedUser: state.authedUser,
}))(Menu);
