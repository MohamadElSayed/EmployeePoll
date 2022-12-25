import Menu from "../Menu";

const AnswerQuestion = () => {
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
          <div className="card" style={{ alignItems: "center" }}>
            <div className="card-subtitle" style={{ paddingTop: "20px" }}>
              Build our new application with Javascript
            </div>
            <button
              className="btn btn-outline-primary"
              style={{ width: "80%", marginTop: "20px" }}
            >
              Click
            </button>
            <br />
          </div>
        </div>

        <div className="col">
          <div className="card" style={{ alignItems: "center" }}>
            <div className="card-subtitle" style={{ paddingTop: "20px" }}>
              Build our new application with TypeScript
            </div>
            <button
              className="btn btn-outline-primary"
              style={{ width: "80%", marginTop: "20px" }}
            >
              Click
            </button>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnswerQuestion;
