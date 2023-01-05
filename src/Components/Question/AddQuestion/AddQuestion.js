import Menu from "../../Menu";
import { connect } from "react-redux";
import { useRef } from "react";
import { handleSaveQuestion } from "../../../actions/questions";
import { useNavigate } from "react-router-dom";

const AddQuestion = ({ authedUser, dispatch }) => {
  const optionOneRef = useRef("");
  const optionTwoRef = useRef("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      handleSaveQuestion({
        author: authedUser.id,
        optionOneText: optionOneRef.current.value,
        optionTwoText: optionTwoRef.current.value,
      })
    );
    navigate("/", { replace: true });
  };

  return (
    <div className="container">
      <Menu page={"newpoll"} />
      <form
        className="justify-content-center"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="row">
          <h3
            className="col"
            style={{ textAlign: "center", paddingTop: "50px" }}
          >
            Would You Rather
          </h3>
        </div>
        <div className="row">
          <h5
            className="col"
            style={{ textAlign: "center", paddingTop: "20px" }}
          >
            Create Your own Poll
          </h5>
        </div>

        <div className="row">
          <div
            className="col"
            style={{ textAlign: "center", paddingTop: "10px" }}
          >
            First Option
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col" style={{ paddingTop: "10px" }}>
            <input
              type="text"
              name="FirstOption"
              className="form-control"
              style={{
                width: "70%",
                display: "block",
                marginRight: "auto",
                marginLeft: "auto",
              }}
              ref={optionOneRef}
            />
          </div>
        </div>

        <div className="row">
          <div
            className="col"
            style={{ textAlign: "center", paddingTop: "10px" }}
          >
            Second Option
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col" style={{ paddingTop: "10px" }}>
            <input
              type="text"
              name="SecondOption"
              className="form-control"
              style={{
                width: "70%",
                display: "block",
                marginRight: "auto",
                marginLeft: "auto",
              }}
              ref={optionTwoRef}
            />
          </div>
        </div>

        <br />
        <br />
        <div className="row justify-content-center">
          <div className="col" style={{ paddingTop: "10px" }}>
            <button
              type="submit"
              name="submitNewPoll"
              className="btn btn-primary "
              style={{
                width: "20%",
                display: "block",
                marginRight: "auto",
                marginLeft: "auto",
              }}
            >
              Submit{" "}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default connect((state) => ({
  authedUser: state.authedUser,
}))(AddQuestion);
