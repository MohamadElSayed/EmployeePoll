import Menu from "../Menu";
import { connect } from "react-redux";
import QuestionCard from "./QuestionCard";

const Dashboard = ({ questions, authedUser }) => {
  return (
    <div className="container text-center">
      <Menu />
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
                  .map((key) => (
                    <QuestionCard key={key} question={questions[key]} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />

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
                  .map((key) => (
                    <QuestionCard key={key} question={questions[key]} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect((state) => ({
  questions: state.questions,
  authedUser: state.authedUser,
}))(Dashboard);
