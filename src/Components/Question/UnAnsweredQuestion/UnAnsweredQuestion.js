import Menu from "../../Menu";
import { connect } from "react-redux";
import { getAvatarImage } from "../../../utils/_Avatar";
import { handleQuestionAnswer } from "../../../actions/questions";
import UnAnsweredQuestionOption from "./UnAnsweredQuestionOption";
import { useState } from "react";

const UnAnsweredQuestion = ({
  qid,
  questions,
  users,
  dispatch,
  authedUser,
}) => {
  const [disabled, setdisabled] = useState(false);

  const handleChooseOption = (event, selectedOption) => {
    event.preventDefault();
    setdisabled(true);
    dispatch(
      handleQuestionAnswer(authedUser.id, questions[qid], selectedOption)
    );
  };

  return (
    <div className="container text-center">
      <Menu />
      <div
        className="row"
        style={{ paddingTop: "20px", paddingBottom: "20px" }}
      >
        <h2 className="col">Poll by {questions[qid].author}</h2>
      </div>
      <img
        src={getAvatarImage(users[questions[qid].author].avatarIndex)}
        style={{ width: "100px", height: "100px" }}
        alt=""
      />
      <div className="row">
        <h3 className="col" style={{ textAlign: "center", paddingTop: "50px" }}>
          Would You Rather{" "}
          {disabled ? (
            <div>
              <br />
              <h4>Please wait, calculating results ...</h4>
            </div>
          ) : (
            ""
          )}
        </h3>
      </div>

      <br />

      <div className="row">
        <UnAnsweredQuestionOption
          question={questions[qid]}
          handleClick={handleChooseOption}
          displayOption={"optionOne"}
          disabled={disabled}
        />
        <UnAnsweredQuestionOption
          question={questions[qid]}
          handleClick={handleChooseOption}
          displayOption={"optionTwo"}
          disabled={disabled}
        />
      </div>
    </div>
  );
};

export default connect((state) => ({
  questions: state.questions,
  authedUser: state.authedUser,
  users: state.users,
}))(UnAnsweredQuestion);
