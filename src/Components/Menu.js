import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { authedUserLogout } from "../actions/authedUser";
import { getAvatarImage } from "../utils/_Avatar";
import { useState } from "react";

const Menu = ({ authedUser, dispatch }) => {
  const [location, setlocation] = useState(window.location.pathname);

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
              {location === "/" ? (
                "Home"
              ) : (
                <Link to="/" onClick={() => setlocation("/")}>
                  Home
                </Link>
              )}
            </div>
            <div className="col">
              {location === "/leaderboard" ? (
                "Leaderboard"
              ) : (
                <Link
                  to="/leaderboard"
                  onClick={() => setlocation("/leaderboard")}
                >
                  Leaderboard
                </Link>
              )}
            </div>
            <div className="col">
              {location === "/add" ? (
                "New"
              ) : (
                <Link to="/add" onClick={() => setlocation("/add")}>
                  New
                </Link>
              )}
            </div>
          </div>
        </div>
        <div className="col" />
        {authedUser ? (
          <>
            <div className="col-md-auto text-end">
              <img
                src={getAvatarImage(authedUser.avatarIndex)}
                style={{
                  width: "20px",
                  height: "20px",
                }}
                alt=""
              />
              {authedUser.name}
            </div>

            <div className="col col-lg-2 text-end">
              <Link onClick={handleLogout}>Logout</Link>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
      <hr />
    </div>
  );
};

export default connect((state) => ({
  authedUser: state.authedUser,
}))(Menu);
