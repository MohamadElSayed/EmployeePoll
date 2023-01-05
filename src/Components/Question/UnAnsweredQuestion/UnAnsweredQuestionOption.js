const UnAnsweredQuestionOption = ({
  question,
  displayOption,
  handleClick,
  disabled,
}) => {
  return (
    <div className="col">
      <div className="card" style={{ alignItems: "center" }}>
        <div className="card-subtitle" style={{ paddingTop: "20px" }}>
          {question[displayOption].text}
        </div>
        <button
          className="btn btn-outline-primary"
          style={{ width: "80%", marginTop: "20px" }}
          onClick={(event) => handleClick(event, displayOption)}
          disabled={disabled}
        >
          Click
        </button>
        <br />
      </div>
    </div>
  );
};

export default UnAnsweredQuestionOption;
