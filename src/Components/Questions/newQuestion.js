import Menu from "../Menu";

const NewQuestion = () => {
  return (
    <div className="container">
      <Menu page={"newpoll"} />
      <form className="justify-content-center">
        <div className="row">
          <h3
            className="col"
            style={{ textAlign: "center", paddingTop: "50px" }}
          >
            Would You Rather
          </h3>
        </div>
        <div className="row">
          <h5
            className="col"
            style={{ textAlign: "center", paddingTop: "20px" }}
          >
            Create Your own Poll
          </h5>
        </div>

        <div className="row">
          <div
            className="col"
            style={{ textAlign: "center", paddingTop: "10px" }}
          >
            First Option
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col" style={{ paddingTop: "10px" }}>
            <input
              type="text"
              name="FirstOption"
              className="form-control"
              style={{
                width: "70%",
                display: "block",
                marginRight: "auto",
                marginLeft: "auto",
              }}
            />
          </div>
        </div>

        <div className="row">
          <div
            className="col"
            style={{ textAlign: "center", paddingTop: "10px" }}
          >
            Second Option
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col" style={{ paddingTop: "10px" }}>
            <input
              type="text"
              name="SecondOption"
              className="form-control"
              style={{
                width: "70%",
                display: "block",
                marginRight: "auto",
                marginLeft: "auto",
              }}
            />
          </div>
        </div>

        <br />
        <br />
        <div className="row justify-content-center">
          <div className="col" style={{ paddingTop: "10px" }}>
            <button
              type="submit"
              name="submitNewPoll"
              className="btn btn-primary "
              style={{
                width: "20%",
                display: "block",
                marginRight: "auto",
                marginLeft: "auto",
              }}
            >
              Submit{" "}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewQuestion;
