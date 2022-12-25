import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Dashboard from "./Components/Dashboard";
import AnswerQuestion from "./Components/Questions/AnswerQuestion";
import LeaderBoard from "./Components/Leaderboard";
import NewQuestion from "./Components/Questions/newQuestion";
import ShowQuestionResult from "./Components/Questions/ShowQuestionResult";
import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";

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
      <Route path="/questions" element={<AnswerQuestion />}></Route>
      <Route path="/leaderboard" element={<LeaderBoard />}></Route>
      <Route path="/newpoll" element={<NewQuestion />}></Route>
      <Route path="/showpollresult" element={<ShowQuestionResult />}></Route>
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
