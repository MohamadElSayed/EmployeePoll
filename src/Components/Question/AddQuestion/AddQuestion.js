import Menu from "../../Menu";
import { connect } from "react-redux";
import { useState } from "react";
import { handleSaveQuestion } from "../../../actions/questions";
import { useNavigate } from "react-router-dom";

const AddQuestion = ({ authedUser, dispatch }) => {
  const [optionOneText, setOptionOneText] = useState("");
  const [optionTwoText, setOptionTwoText] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      handleSaveQuestion({
        author: authedUser.id,
        optionOneText: optionOneText,
        optionTwoText: optionTwoText,
      })
    );
    navigate("/", { replace: true });
  };

  return (
    <div className="container text-center">
      <Menu />
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
              value={optionOneText}
              placeholder="Option 1 Text"
              onChange={(e) => setOptionOneText(e.target.value)}
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
              value={optionTwoText}
              onChange={(e) => setOptionTwoText(e.target.value)}
              placeholder="Option 2 Text"
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
              disabled={
                optionOneText.trim() === "" || optionTwoText.trim() === ""
              }
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
