import Menu from "../../Menu";
import { getAvatarImage } from "../../../utils/_Avatar";
import AnsweredQuestionOption from "./AnsweredQuestionOption";

const AnsweredQuestion = ({ question, authedUser, pollOwner }) => {
  return (
    <div className="container text-center">
      <Menu />
      <div
        className="row"
        style={{ paddingTop: "20px", paddingBottom: "20px" }}
      >
        <h2 className="col">Poll by {question.author}</h2>
      </div>
      <img
        src={getAvatarImage(pollOwner.avatarIndex)}
        style={{ width: "100px", height: "100px" }}
        alt=""
      />
      <div className="row">
        <h3 className="col" style={{ textAlign: "center", paddingTop: "50px" }}>
          Would You Rather
        </h3>
      </div>

      <br />
      <div className="row">
        <AnsweredQuestionOption
          authedUser={authedUser}
          question={question}
          displayOption={"optionOne"}
          theOtherOption={"optionTwo"}
        />

        <AnsweredQuestionOption
          authedUser={authedUser}
          question={question}
          displayOption={"optionTwo"}
          theOtherOption={"optionOne"}
        />
      </div>
    </div>
  );
};

export default AnsweredQuestion;
