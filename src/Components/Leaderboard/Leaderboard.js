import Menu from "../Menu";
import { connect } from "react-redux";
import DisplayUser from "./DisplayUser/DisplayUser";

const LeaderBoard = ({ users }) => {
  const compare = (userA, userB) => {
    if (userA.answersCount > userB.answersCount) {
      return -1;
    }
    if (userA.answersCount < userB.answersCount) {
      return 1;
    }
    if (userA.questionsCount > userB.questionsCount) {
      return -1;
    }
    if (userA.questionsCount < userB.questionsCount) {
      return 1;
    }
    return 0;
  };
  const usersList = () => {
    return Object.keys(users).map((u) => {
      return {
        id: users[u].id,
        name: users[u].name,
        avatarIndex: users[u].avatarIndex,
        answersCount: Object.keys(users[u].answers).length,
        questionsCount: Object.keys(users[u].questions).length,
      };
    });
  };
  return (
    <div className="container text-center">
      <Menu />
      <div className="row justify-content-center">
        <table className="table table-bordered" style={{ width: "80%" }}>
          <thead>
            <tr>
              <th>Users</th>
              <th>Answered</th>
              <th>Created</th>
            </tr>
          </thead>
          <tbody>
            {usersList()
              .sort(compare)
              .map((user) => {
                return <DisplayUser key={user.id} user={user} />;
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default connect((state) => ({
  users: state.users,
}))(LeaderBoard);
