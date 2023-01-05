import Login from "./Components/Login";
// import Signup from "./Components/Signup";
import Dashboard from "./Components/Dashboard/Dashboard";
// import AnswerQuestion from "./Components/Questions/AnswerQuestion";
import LeaderBoard from "./Components/Leaderboard/Leaderboard";
import AddQuestion from "./Components/Question/AddQuestion/AddQuestion";
import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
import Question from "./Components/Question/Question";

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
