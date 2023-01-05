import { getTimeFromTimeStamp, getDateFromTimeStamp } from "../../utils/common";
import { Link } from "react-router-dom";

const QuestionCard = ({ question }) => {
  return (
    <div className="col">
      <div className="card" style={{ alignItems: "center" }}>
        <h5 className="card-title" style={{ paddingTop: "5px" }}>
          {question.author}
        </h5>

        <div className="card-subtitle">
          {getTimeFromTimeStamp(question.timestamp)} |{" "}
          {getDateFromTimeStamp(question.timestamp)}
        </div>
        <br />
        <Link
          className="btn btn-outline-success"
          style={{ width: "80%" }}
          to={"/questions/" + question.id}
        >
          Show
        </Link>
        <br />
      </div>
    </div>
  );
};

export default QuestionCard;
