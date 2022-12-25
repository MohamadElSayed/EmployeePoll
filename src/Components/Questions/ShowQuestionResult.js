import Menu from "../Menu";
import Checked from "../../Images/check.svg";
import NotChecked from "../../Images/x.svg";

const ShowQuestionResult = () => {
  return (
    <div className="container text-center">
      <Menu />
      <div
        className="row"
        style={{ paddingTop: "20px", paddingBottom: "20px" }}
      >
        <h2 className="col">Poll by sarahdo</h2>
      </div>
      <img
        src={require("../../Images/Avatar-1.gif")}
        style={{ width: "100px", height: "100px" }}
      />
      <div className="row">
        <h3 className="col" style={{ textAlign: "center", paddingTop: "50px" }}>
          Would You Rather
        </h3>
      </div>

      <br />
      <div className="row">
        <div className="col">
          <div
            className="card text-success"
            style={{
              alignItems: "center",
            }}
          >
            <div className="card-subtitle" style={{ paddingTop: "20px" }}>
              Build our new application with Javascript
            </div>
            <div className="card-subtitle" style={{ paddingTop: "20px" }}>
              78%
            </div>

            <img
              src={Checked}
              alt="React Logo"
              style={{ width: "50px", height: "50px" }}
            />

            <br />
          </div>
        </div>

        <div className="col">
          <div
            className="card text-danger"
            style={{
              alignItems: "center",
            }}
          >
            <div className="card-subtitle" style={{ paddingTop: "20px" }}>
              Build our new application with Typescript
            </div>
            <div className="card-subtitle" style={{ paddingTop: "20px" }}>
              20%
            </div>

            <img
              src={NotChecked}
              alt="React Logo"
              style={{ width: "50px", height: "50px" }}
            />

            <br />
            <div className="card-footer text-primary" style={{ width: "100%" }}>
              Your Selection
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowQuestionResult;
