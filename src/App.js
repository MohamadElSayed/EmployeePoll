import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard/Dashboard";
import LeaderBoard from "./Components/Leaderboard/Leaderboard";
import AddQuestion from "./Components/Question/AddQuestion/AddQuestion";
import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
import Question from "./Components/Question/Question";
import NotFound404 from "./NotFound404";

function App(props) {
  const authedUser =
    props.authedUser &&
    props.authedUser.id &&
    props.authedUser.id.length !== 0 &&
    !props.authedUser.errorMessage;

  return authedUser ? (
    <Routes>
      <Route exact path="/" element={<Dashboard />}></Route>
      <Route path="/login" element={<Dashboard />}></Route>
      <Route path="/leaderboard" element={<LeaderBoard />}></Route>
      <Route path="/add" element={<AddQuestion />}></Route>
      <Route path="/questions/:qid" element={<Question />}></Route>
      <Route
        path="*"
        element={<NotFound404 errorMessage={"Page Not Found"} />}
      />
    </Routes>
  ) : (
    <Routes>
      <Route path="*" element={<Login />}></Route>
    </Routes>
  );
}

export default connect((state) => ({
  authedUser: state.authedUser,
}))(App);
