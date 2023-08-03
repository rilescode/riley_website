import React from "react";

interface ButtonProps {
  title: string;
  link?: string; // The route path to the component you want to navigate to
}

const Button: React.FC<ButtonProps> = ({ title, link }) => {
  // const navigate = useNavigate();

  // const handleClick = () => {
  //   link && navigate(link);
  // };

  return (
    <button className="button">
      <h1>{title}</h1>
    </button>
  );
};

export default Button;
