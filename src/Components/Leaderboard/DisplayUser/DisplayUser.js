import { getAvatarImage } from "../../../utils/_Avatar";

const DisplayUser = ({ user }) => {
  return (
    <tr>
      <td>
        <div className="row">
          <div className="col" style={{ maxWidth: "30px" }}>
            <img
              src={getAvatarImage(user.avatarIndex)}
              style={{
                width: "20px",
                height: "20px",
              }}
              alt=""
            />
          </div>
          <div className="col">
            <h6>{user.name}</h6>
            <div>{user.id}</div>
          </div>
        </div>
      </td>
      <td>{user.answersCount}</td>
      <td>{user.questionsCount}</td>
    </tr>
  );
};

export default DisplayUser;
