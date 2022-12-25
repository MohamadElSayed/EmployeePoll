import Menu from "./Menu";
import { connect } from "react-redux";
import { useEffect } from "react";
import { handleReceiveQuestions } from "../actions/questions";

const Dashboard = (props) => {
  useEffect(() => {
    props.dispatch(handleReceiveQuestions());
  }, []);

  return (
    <div className="container">
      <Menu page={"home"} />
      <div className="col d-flex justify-content-center">
        <div className="card" style={{ width: "90%" }}>
          <h5 className="card-header" style={{ textAlign: "center" }}>
            New Questions
          </h5>
          <div className="card-body">
            <div className="container">
              <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                  <div className="card" style={{ alignItems: "center" }}>
                    <h5 className="card-title" style={{ paddingTop: "5px" }}>
                      Card 1
                    </h5>

                    <div className="card-subtitle">4:11: PM || 11/23/2021</div>
                    <br />
                    <button
                      className="btn btn-outline-primary"
                      style={{ width: "80%" }}
                    >
                      Show
                    </button>
                    <br />
                  </div>
                </div>
                <div className="col">
                  <div className="card" style={{ alignItems: "center" }}>
                    <h5 className="card-title" style={{ paddingTop: "5px" }}>
                      Card 2
                    </h5>

                    <div className="card-subtitle">4:11: PM || 11/23/2021</div>
                    <br />
                    <button
                      className="btn btn-outline-primary"
                      style={{ width: "80%" }}
                    >
                      Show
                    </button>
                    <br />
                  </div>
                </div>
                <div className="col">
                  <div className="card" style={{ alignItems: "center" }}>
                    <h5 className="card-title" style={{ paddingTop: "5px" }}>
                      Card 3
                    </h5>

                    <div className="card-subtitle">4:11: PM || 11/23/2021</div>
                    <br />
                    <button
                      className="btn btn-outline-primary"
                      style={{ width: "80%" }}
                    >
                      Show
                    </button>
                    <br />
                  </div>
                </div>
                <div className="col">
                  <div className="card" style={{ alignItems: "center" }}>
                    <h5 className="card-title" style={{ paddingTop: "5px" }}>
                      Card 4
                    </h5>

                    <div className="card-subtitle">4:11: PM || 11/23/2021</div>
                    <br />
                    <button
                      className="btn btn-outline-primary"
                      style={{ width: "80%" }}
                    >
                      Show
                    </button>
                    <br />
                  </div>
                </div>
                <div className="col">
                  <div className="card" style={{ alignItems: "center" }}>
                    <h5 className="card-title" style={{ paddingTop: "5px" }}>
                      Card 5
                    </h5>

                    <div className="card-subtitle">4:11: PM || 11/23/2021</div>
                    <br />
                    <button
                      className="btn btn-outline-primary"
                      style={{ width: "80%" }}
                    >
                      Show
                    </button>
                    <br />
                  </div>
                </div>

                <div className="col">
                  <div className="card" style={{ alignItems: "center" }}>
                    <h5 className="card-title" style={{ paddingTop: "5px" }}>
                      Card 6
                    </h5>

                    <div className="card-subtitle">4:11: PM || 11/23/2021</div>
                    <br />
                    <button
                      className="btn btn-outline-primary"
                      style={{ width: "80%" }}
                    >
                      Show
                    </button>
                    <br />
                  </div>
                </div>

                <div className="col">
                  <div className="card" style={{ alignItems: "center" }}>
                    <h5 className="card-title" style={{ paddingTop: "5px" }}>
                      Card 7
                    </h5>

                    <div className="card-subtitle">4:11: PM || 11/23/2021</div>
                    <br />
                    <button
                      className="btn btn-outline-primary"
                      style={{ width: "80%" }}
                    >
                      Show
                    </button>
                    <br />
                  </div>
                </div>
                <div className="col">
                  <div className="card" style={{ alignItems: "center" }}>
                    <h5 className="card-title" style={{ paddingTop: "5px" }}>
                      Card 8
                    </h5>

                    <div className="card-subtitle">4:11: PM || 11/23/2021</div>
                    <br />
                    <button
                      className="btn btn-outline-primary"
                      style={{ width: "80%" }}
                    >
                      Show
                    </button>
                    <br />
                  </div>
                </div>
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
                <div className="col">
                  <div className="card" style={{ alignItems: "center" }}>
                    <h5 className="card-title" style={{ paddingTop: "5px" }}>
                      Card 1
                    </h5>

                    <div className="card-subtitle">4:11: PM || 11/23/2021</div>
                    <br />
                    <button
                      className="btn btn-outline-primary"
                      style={{ width: "80%" }}
                    >
                      Show
                    </button>
                    <br />
                  </div>
                </div>
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
