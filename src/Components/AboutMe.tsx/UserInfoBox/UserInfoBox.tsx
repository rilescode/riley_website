import { User } from "../../../types/Types";

interface UserInfoBoxProps {
  user: User;
}

const UserInfoBox: React.FC<UserInfoBoxProps> = ({ user }) => {
  return (
    <div className="container">
      <div className="title"> {user.name}</div>
      <div>
        <div className="text">{user.email}</div>
        <div className="text">{user.phone}</div>
        <div className="text">{user.github}</div>
        <div className="text">{user.linkedin}</div>
        <div className="text">{user.resume}</div>
        <div className="text">{user.summary}</div>
      </div>
    </div>
  );
};

export default UserInfoBox;
