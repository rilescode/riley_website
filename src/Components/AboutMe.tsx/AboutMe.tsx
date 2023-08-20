import { User } from "../../types/Types";
import UserInfoBox from "./UserInfoBox/UserInfoBox";

interface AboutMeProps {
  user: User;
}

const AboutMe: React.FC<AboutMeProps> = ({ user }) => {
  // { isAdmin, name, email, phone, github, linkedin, resume,summary } = user
  return (
    <>
      <div className="about-me-container">
        <UserInfoBox user={user}></UserInfoBox>
      </div>
    </>
  );
};

export default AboutMe;
