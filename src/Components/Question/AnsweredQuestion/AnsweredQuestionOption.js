const AnsweredQuestionOption = ({
  authedUser,
  question,
  displayOption,
  theOtherOption,
}) => {
  return (
    <div className="col">
      <div
        className="card text-success"
        style={{
          alignItems: "center",
        }}
      >
        <div className="card-subtitle text-dark" style={{ paddingTop: "20px" }}>
          <strong>{question[displayOption].text}</strong>
        </div>
        <div className="card-subtitle text-info" style={{ paddingTop: "20px" }}>
          Number of Votes: {question[displayOption].votes.length}
          <br />
          <strong>
            {(
              (question[displayOption].votes.length * 100) /
              (question[displayOption].votes.length +
                question[theOtherOption].votes.length)
            ).toFixed(0)}
            %
          </strong>
        </div>

        <br />

        {authedUser.answers[question.id] === displayOption ? (
          <div className="card-footer text-primary" style={{ width: "100%" }}>
            Your Selection
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default AnsweredQuestionOption;
