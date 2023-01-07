import { useRef } from "react";
import { handleSetAuthedUser } from "../actions/authedUser";
import { connect } from "react-redux";
import Menu from "./Menu";

const Login = ({ dispatch, authedUser }) => {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      handleSetAuthedUser(usernameRef.current.value, passwordRef.current.value)
    );
  };
  return (
    <div className="container">
      <Menu />
      <form className="justify-content-center" onSubmit={handleSubmit}>
        <div className="row">
          <h3
            className="col"
            style={{ textAlign: "center", paddingTop: "50px" }}
          >
            Employee Polls
          </h3>
        </div>
        <div className="row justify-content-center">
          <img
            src={require("../Images/login.gif")}
            style={{ width: "200px", height: "200px" }}
            alt="login"
          />
        </div>

        <div className="Row">
          {authedUser && authedUser.errorMessage ? (
            <p
              data-testid="errorMessage"
              className="text-danger"
              style={{
                width: "70%",
                display: "block",
                marginRight: "auto",
                marginLeft: "auto",
              }}
            >
              {authedUser.errorMessage}
            </p>
          ) : (
            ""
          )}
        </div>
        <div className="row">
          <div
            className="col"
            style={{ textAlign: "center", paddingTop: "10px" }}
          >
            User
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col" style={{ paddingTop: "10px" }}>
            <input
              type="text"
              name="username"
              data-testid="username"
              className="form-control"
              style={{
                width: "70%",
                display: "block",
                marginRight: "auto",
                marginLeft: "auto",
              }}
              ref={usernameRef}
            />
          </div>
        </div>

        <div className="row">
          <div
            className="col"
            style={{ textAlign: "center", paddingTop: "10px" }}
          >
            Password
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col" style={{ paddingTop: "10px" }}>
            <input
              type="password"
              name="password"
              data-testid="password"
              className="form-control"
              style={{
                width: "70%",
                display: "block",
                marginRight: "auto",
                marginLeft: "auto",
              }}
              ref={passwordRef}
            />
          </div>
        </div>

        <br />
        <br />
        <div className="row justify-content-center">
          <div className="col" style={{ paddingTop: "0px" }}>
            <button
              type="submit"
              name="submitLogin"
              className="btn btn-primary "
              data-testid="submit-button"
              style={{
                width: "20%",
                display: "block",
                marginRight: "auto",
                marginLeft: "auto",
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default connect((state) => ({
  authedUser: state.authedUser,
}))(Login);
