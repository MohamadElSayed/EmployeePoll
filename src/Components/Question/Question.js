import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import AnsweredQuestion from "./AnsweredQuestion/AnsweredQuestion";
import UnAnsweredQuestion from "./UnAnsweredQuestion/UnAnsweredQuestion";
import NotFound404 from "./NotFound404";

const Question = ({ questions, authedUser, users }) => {
  const params = useParams();

  return questions[params.qid] ? (
    Object.keys(authedUser.answers).includes(params.qid) ? (
      <AnsweredQuestion
        question={questions[params.qid]}
        authedUser={authedUser}
        pollOwner={users[questions[params.qid].author]}
      />
    ) : (
      <UnAnsweredQuestion qid={params.qid} />
    )
  ) : (
    <NotFound404 />
  );
};

export default connect((state) => ({
  questions: state.questions,
  authedUser: state.authedUser,
  users: state.users,
}))(Question);
