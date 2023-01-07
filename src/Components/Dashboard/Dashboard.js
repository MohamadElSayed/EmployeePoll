import Menu from "../Menu";
import { connect } from "react-redux";
import QuestionCard from "./QuestionCard";
import { useState } from "react";

const Dashboard = ({ questions, authedUser }) => {
  const ANSWERED_CATEGORY = "ANSWERED";
  const UNANSWERED_CATEGORY = "UNANSWERED";

  const [showCategory, setShowCategory] = useState(UNANSWERED_CATEGORY);

  const compare = (questionA, questionB) => {
    let timestampA = questions[questionA].timestamp;
    let timestampB = questions[questionB].timestamp;
    if (timestampA > timestampB) {
      return -1;
    }
    if (timestampA < timestampB) {
      return 1;
    }
    return 0;
  };

  return (
    <div className="container text-center">
      <Menu />
      <div className="row">
        <div className="col d-flex" style={{ marginLeft: "5%" }}>
          <div
            class="btn-group"
            role="group"
            aria-label="Basic radio toggle button group"
          >
            <input
              type="radio"
              class="btn-check"
              name="btnradio"
              id="btnradio1"
              autocomplete="off"
              checked={showCategory === UNANSWERED_CATEGORY ? true : false}
              onClick={() => setShowCategory(UNANSWERED_CATEGORY)}
            />
            <label class="btn btn-outline-primary" for="btnradio1">
              UnAnswered
            </label>

            <input
              type="radio"
              class="btn-check"
              name="btnradio"
              id="btnradio2"
              autocomplete="off"
              onClick={() => setShowCategory(ANSWERED_CATEGORY)}
              checked={showCategory === ANSWERED_CATEGORY ? true : false}
            />
            <label class="btn btn-outline-primary" for="btnradio2">
              Answered
            </label>
          </div>
        </div>
      </div>
      <br />
      {showCategory === UNANSWERED_CATEGORY ? (
        <div className="row">
          <div className="col d-flex justify-content-center">
            <div className="card" style={{ width: "90%" }}>
              <h5 className="card-header" style={{ textAlign: "center" }}>
                New Questions
              </h5>
              <div className="card-body">
                <div className="container">
                  <div className="row row-cols-1 row-cols-md-3 g-4">
                    {Object.keys(questions)
                      .filter(
                        (key) => !Object.keys(authedUser.answers).includes(key)
                      )
                      .sort(compare)
                      .map((key) => (
                        <QuestionCard key={key} question={questions[key]} />
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {showCategory === ANSWERED_CATEGORY ? (
        <div className="row">
          <div className="col d-flex justify-content-center">
            <div className="card" style={{ width: "90%" }}>
              <h5 className="card-header" style={{ textAlign: "center" }}>
                Done
              </h5>
              <div className="card-body">
                <div className="container">
                  <div className="row row-cols-1 row-cols-md-3 g-4">
                    {Object.keys(questions)
                      .filter((key) =>
                        Object.keys(authedUser.answers).includes(key)
                      )
                      .sort(compare)
                      .map((key) => (
                        <QuestionCard key={key} question={questions[key]} />
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default connect((state) => ({
  questions: state.questions,
  authedUser: state.authedUser,
}))(Dashboard);
