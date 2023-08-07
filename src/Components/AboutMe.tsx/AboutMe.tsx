import { User } from "../../types/Types";
import { ABOUT_PAGE_TITLE } from "../../types/constants";
import Header from "../Header/Header";
import UserInfoBox from "./UserInfoBox/UserInfoBox";

interface AboutMeProps {
  user: User;
}

const AboutMe: React.FC<AboutMeProps> = ({ user }) => {
  // { isAdmin, name, email, phone, github, linkedin, resume,summary } = user
  return (
    <>
      <Header pageName={ABOUT_PAGE_TITLE}></Header>
      <div className="about-me-container">
        <UserInfoBox user={user}></UserInfoBox>
      </div>
    </>
  );
};

export default AboutMe;
