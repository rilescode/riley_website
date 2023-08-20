import React from "react";

interface ButtonProps {
  title: string;
  onPress?: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, onPress }) => {
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
