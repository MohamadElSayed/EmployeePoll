import { getAvatarImage } from "../../../utils/_Avatar";

const DisplayUser = ({ user }) => {
  return (
    <tr>
      <td>
        <div className="row">
          <div className="col" style={{ maxWidth: "60px" }}>
            <img
              src={getAvatarImage(user.avatarIndex)}
              style={{
                width: "40px",
                height: "40px",
              }}
              alt=""
            />
          </div>
          <div className="col" style={{ textAlign: "left" }}>
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
